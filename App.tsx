import * as SplashScreen from "expo-splash-screen";
import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import configureStore from "./src/store/configureStore";
import AppNavigation from "./src/navigation/AppNavigation";

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const store = configureStore();

  const init = async (): Promise<void> => {
    try {
      await SplashScreen.preventAutoHideAsync();
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(true);
      await SplashScreen.hideAsync();
    }
  };

  useEffect(() => {
    init();
  }, []);

  if (!isLoading) {
    return null;
  }

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Quiz from "../screens/Quiz";
import Score from "../screens/Score";

export type StackParamList = {
  Home: undefined;
  Quiz: { nextQ: number };
  Score: undefined;
};

const AppNavigation = (): JSX.Element => {
  const Stack = createStackNavigator<StackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Quiz"
          component={Quiz}
          initialParams={{ nextQ: 0 }}
        />
        <Stack.Screen name="Score" component={Score} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

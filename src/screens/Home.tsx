import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../navigation/AppNavigation";
import { fetchQuestions } from "../actions/questions";
import { Spinner } from "native-base";
import Layout from "../components/Layout";
import Header from "../components/Header";
import TextComponent from "../components/TextComponent";
import ButtonComponent from "../components/ButtonComponent";

type HomeProps = {
  navigation: StackNavigationProp<StackParamList, "Home">;
};

const Home: React.FC<HomeProps> = ({ navigation }): JSX.Element => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState<boolean>(false);

  const onBegin = (): void => {
    // activate spinner till fetching data from api
    setLoading(true);
    // prefetching all the questions through dispatching fetchQuestions action
    dispatch(fetchQuestions());
    // navigate to the Quiz screen
    navigation.navigate("Quiz", { nextQ: 0 });
    setLoading(false);
  };

  return (
    <Layout>
      <Header title="Welcome to the Trivia Challenge!" />
      <TextComponent text="You will be presented with 10 True or False questions." />
      <TextComponent text="Can you score 100%?" />
      {loading ? (
        <Spinner />
      ) : (
        <ButtonComponent onPress={onBegin}>
          <TextComponent text="BEGIN" />
        </ButtonComponent>
      )}
    </Layout>
  );
};

export default Home;

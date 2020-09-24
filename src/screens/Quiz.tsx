import React, { useEffect } from "react";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useSelector, useDispatch } from "react-redux";
import { Card, View, Spinner } from "native-base";
import { StackParamList } from "../navigation/AppNavigation";
import { getNextQuestion } from "../actions/questions";
import Layout from "../components/Layout";
import Header from "../components/Header";
import TextComponent from "../components/TextComponent";
import ButtonComponent from "../components/ButtonComponent";
import styles from "./Quiz.style";
import { saveAnswer } from "../actions/answers";
import { RootState } from "../store/configureStore";
import { QState } from "../reducers/questions";
import { Answer } from "../reducers/answers";

type QuizProps = {
  navigation: StackNavigationProp<StackParamList, "Quiz">;
  route: RouteProp<StackParamList, "Quiz">;
};

const Quiz: React.FC<QuizProps> = ({ route, navigation }): JSX.Element => {
  // useDispatch hook will be used for dispatching an action to get the next in order question
  // from the redux store when route params changed
  const dispatch = useDispatch();

  // useSelector hook will be used to fetch the data to be displayed from the redux store
  const state: QState = useSelector((state: RootState) => state.questions);

  // distructuring the state object obtained with useSelector hook to display to the screen
  const { questions, nextQuestion, error } = state;

  // useEffect will watch changes of the route params in order to dispatch the get next question action
  useEffect(() => {
    dispatch(getNextQuestion(route.params.nextQ));
  }, [route.params.nextQ]);

  const current = route.params.nextQ + 1;

  // this function will register every answer to the answer object in the redux store as well as calculate the final score
  const onAnswer = (option: string): void => {
    const answer = {
      ...nextQuestion,
      user_answer: option,
      score: nextQuestion?.correct_answer === option ? 1 : 0,
    };
    dispatch(saveAnswer(answer as Answer));
    navigation.navigate("Quiz", { nextQ: current });
  };

  // checking if the user reaches the end of the question set and navigate to the Score screen
  if (questions.length > 0 && route.params.nextQ >= questions.length) {
    navigation.navigate("Score");
  }

  // spinner will be shown in case of delay in fetching the nextQuestion
  if (
    questions.length === 0 ||
    nextQuestion === null ||
    nextQuestion === undefined
  ) {
    return (
      <Layout>
        <Spinner />
      </Layout>
    );
  }

  // error handling and displaying error message to the user
  if (error) {
    return (
      <Layout>
        <TextComponent text={error} />
      </Layout>
    );
  }

  // displaying the single question with its order in the set and two possibles answers in the form of buttons
  return (
    <Layout>
      <Header title={nextQuestion.category} />
      <Card style={styles.card}>
        <TextComponent text={nextQuestion.question} />
      </Card>
      <TextComponent text="Please pick an answer" />
      <View style={styles.answers}>
        <ButtonComponent onPress={(): void => onAnswer("True")} color="green">
          <TextComponent text="Yes" />
        </ButtonComponent>
        <ButtonComponent onPress={(): void => onAnswer("False")} color="red">
          <TextComponent text="No" />
        </ButtonComponent>
      </View>
      <TextComponent text={`${current} / ${questions.length}`} />
    </Layout>
  );
};

export default Quiz;

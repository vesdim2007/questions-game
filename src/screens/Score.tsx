import React from "react";
import { FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../navigation/AppNavigation";
import Layout from "../components/Layout";
import Header from "../components/Header";
import TextComponent from "../components/TextComponent";
import ButtonComponent from "../components/ButtonComponent";
import AnswerItem from "../components/AnswerItem";
import { resetQStore } from "../actions/questions";
import { resetAStore } from "../actions/answers";
import { RootState } from "../store/configureStore";
import { AState, Answer } from "../reducers/answers";

type ScoreProps = {
  navigation: StackNavigationProp<StackParamList, "Score">;
};

const Score: React.FC<ScoreProps> = ({ navigation }) => {
  const state: AState = useSelector((state: RootState) => state.answers);
  const { answers, score } = state;
  const dispatch = useDispatch();

  const onPlay = (): void => {
    dispatch(resetQStore());
    dispatch(resetAStore());
    navigation.navigate("Home");
  };

  const renderAnswer = (answer: Answer, index: number) => {
    return <AnswerItem answer={answer} index={index} />;
  };

  return (
    <Layout>
      <Header title="You scored" />
      <TextComponent text={`${score} / ${answers.length}`} />
      {answers.length > 0 ? (
        <FlatList
          data={answers}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => renderAnswer(item, index)}
          keyExtractor={(item) => item.question}
        />
      ) : (
        <TextComponent text="No answers to display" />
      )}
      <ButtonComponent onPress={onPlay}>
        <TextComponent text="PLAY AGAIN?" />
      </ButtonComponent>
    </Layout>
  );
};

export default Score;

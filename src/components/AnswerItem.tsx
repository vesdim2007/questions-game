import React from "react";
import { ListItem, View, Text } from "native-base";
import TextComponent from "./TextComponent";
import { Answer } from "../reducers/answers";
import styles from "./AnswerItem.style";

type AnswerItemProps = {
  answer: Answer;
  index: number;
};

const AnswerItem: React.FC<AnswerItemProps> = ({ answer, index }) => {
  return (
    <ListItem key={index}>
      <View style={styles.item}>
        <TextComponent sign={true} text={answer.score > 0 ? "+" : "-"} />

        <View style={styles.answer}>
          <TextComponent text={answer.question} answer={true} />
        </View>
      </View>
    </ListItem>
  );
};

export default AnswerItem;

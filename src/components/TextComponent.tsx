import React from "react";
import { Text } from "native-base";
import styles from "./TextComponent.style";

type TextComponentProps = {
  text: string;
  answer?: boolean;
  sign?: boolean;
};

const TextComponent: React.FC<TextComponentProps> = ({
  text,
  answer,
  sign,
}): JSX.Element => {
  return (
    <Text style={answer ? styles.answer : sign ? styles.sign : styles.text}>
      {text}
    </Text>
  );
};

export default TextComponent;

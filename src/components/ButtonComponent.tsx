import React, { ReactChild } from "react";
import { Button } from "native-base";
import styles from "./ButtonComponent.style";

type ButtonComponentProps = {
  children: ReactChild;
  color?: string;
  onPress(): Promise<void> | void;
};

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  color,
  children,
  onPress,
}): JSX.Element => {
  return (
    <Button
      onPress={onPress}
      style={color ? [styles.btn, { backgroundColor: color }] : styles.btn}
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;

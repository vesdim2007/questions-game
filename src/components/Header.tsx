import React from "react";
import { H2 } from "native-base";
import styles from "./Header.style";

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }): JSX.Element => {
  return <H2 style={styles.title}>{title}</H2>;
};

export default Header;

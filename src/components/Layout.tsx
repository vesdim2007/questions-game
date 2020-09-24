import React, { ReactChild } from "react";
import { View } from "native-base";
import styles from "./Layout.style";

type LayoutProps = {
  children: ReactChild[] | ReactChild;
};

const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {
  return <View style={styles.container}>{children}</View>;
};

export default Layout;

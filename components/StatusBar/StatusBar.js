import React, { useContext } from "react";
import Constants from "expo-constants";

// context
import AppStore from "../../contexts/GlobalContext";

// sc
import { StatusBarView } from "./StatusBar.styles";

const StatusBar = () => {
  const { theme } = useContext(AppStore);
  const statusBarHeight = Constants.statusBarHeight;
  return <StatusBarView theme={theme} height={statusBarHeight} />;
};

export default StatusBar;

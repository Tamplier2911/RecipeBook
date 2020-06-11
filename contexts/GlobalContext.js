import React, { useEffect, useState, createContext } from "react";
import { Dimensions, Platform } from "react-native";
/*
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const temp = {
  height: hp("70%"), // height persentage
  width: wp("80%"), // width persentage
};
*/

const Context = createContext({});

export const GlobalStore = ({ children }) => {
  const [appGlobalState, setAppGlobalState] = useState({
    theme: "light",
    platform: Platform.OS,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    orientation:
      Dimensions.get("window").width > Dimensions.get("window").height
        ? "landscape"
        : "portrait",
  });
  const { theme, platform, width, height, orientation } = appGlobalState;

  useEffect(() => {
    const adjustDeviceValues = () => {
      const width = Dimensions.get("window").width;
      const height = Dimensions.get("window").height;
      const orientation = width > height ? "landscape" : "portrait";
      setAppGlobalState({ ...appGlobalState, width, height, orientation });
    };
    Dimensions.addEventListener("change", adjustDeviceValues);
    return () => Dimensions.removeEventListener("change", adjustDeviceValues);
  }, []);

  /**
   * @function SetThemeLight - set theme to "light"
   */
  const setThemeLight = () => {
    setAppGlobalState({ ...appGlobalState, theme: "light" });
  };

  /**
   * @function SetThemeDark - set theme to "dark"
   */
  const setThemeDark = () => {
    setAppGlobalState({ ...appGlobalState, theme: "dark" });
  };

  return (
    <Context.Provider
      value={{
        theme,
        platform,
        width,
        height,
        orientation,
        setThemeLight,
        setThemeDark,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;

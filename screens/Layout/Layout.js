import React, { useContext } from "react";

// navigator
import { NavigationContainer } from "@react-navigation/native";

// context
import AppStore from "../../contexts/GlobalContext";

// navigators
import MainDrawerNavigator from "../../navigators/MainDrawerNavigator/MainDrawerNavigator";

// components
import StatusBar from "../../components/StatusBar/StatusBar";
import Spinner from "../../components/Spinner/Spinner";
import AddRecipeModal from "../../components/AddRecipeModal/AddRecipeModal";

// sc
import { RootLayout } from "./Layout.styles";

const Layout = ({ fontLoaded }) => {
  const {
    theme,
    platform,
    width,
    height,
    orientation,
    setThemeLight,
    setThemeDark,
  } = useContext(AppStore);

  console.log(platform, width, height, orientation);

  return fontLoaded ? (
    <RootLayout theme={theme}>
      {orientation === "portrait" ? <StatusBar /> : null}
      <NavigationContainer>
        <MainDrawerNavigator />
      </NavigationContainer>
      <AddRecipeModal />
    </RootLayout>
  ) : (
    <Spinner size="large" />
  );
};

export default Layout;

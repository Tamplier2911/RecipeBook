import React, { useContext } from "react";

// navigator
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// context
import AppStore from "../../contexts/GlobalContext";

// navigators
import MealsFavsTabNavigator from "../../navigators/MealsFavsTabNavigator/MealsFavsTabNavigator";
// import MealsStackNavigator from "../../navigators/MealsStackNavigator/MealsStackNavigator";

// components
import StatusBar from "../../components/StatusBar/StatusBar";
import Spinner from "../../components/Spinner/Spinner";
import AddRecipeModal from "../../components/AddRecipeModal/AddRecipeModal";

// screens
import FavoritesScreen from "../FavoritesScreen/FavoritesScreen";
import FiltersScreen from "../FiltersScreen/FiltersScreen";

// sc
import { RootLayout } from "./Layout.styles";

// global styles
import globalStyles from "../../constants/globalStyles";

const Stack = createStackNavigator();

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
        <MealsFavsTabNavigator />
      </NavigationContainer>
      <AddRecipeModal />
    </RootLayout>
  ) : (
    <Spinner size="large" />
  );
};

export default Layout;

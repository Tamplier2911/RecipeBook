import React, { useContext } from "react";

// context
import AppStore from "../../contexts/GlobalContext";

// components
import StatusBar from "../../components/StatusBar/StatusBar";
import Spinner from "../../components/Spinner/Spinner";
import Button from "../../components/Button/Button";

// screens
import CategoriesScreen from "../CategoriesScreen/CategoriesScreen";
import FavoritesScreen from "../FavoritesScreen/FavoritesScreen";
import FiltersScreen from "../FiltersScreen/FiltersScreen";
import MealDetailsScreen from "../MealDetailsScreen/MealDetailsScreen";
import MealsScreen from "../MealsScreen/MealsScreen";

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
      <Button
        title={"click"}
        onPress={() => (theme === "dark" ? setThemeLight() : setThemeDark())}
      />
      <CategoriesScreen />
      <FavoritesScreen />
      <FiltersScreen />
      <MealDetailsScreen />
      <MealsScreen />
    </RootLayout>
  ) : (
    <Spinner size="large" />
  );
};

export default Layout;

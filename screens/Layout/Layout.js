import React, { useContext } from "react";

// navigator
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

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
        <Stack.Navigator
          initialRouteName="Categories"
          // stack shared options
          // screenOptions={{ title: "Recipeious" }}
        >
          <Stack.Screen
            name="Categories"
            component={CategoriesScreen}
            // stack screen own options
            options={{ title: "Categories" }}
          />
          <Stack.Screen
            name="Meals"
            component={MealsScreen}
            options={{ title: "Meals" }}
          />
          <Stack.Screen
            name="MealDetails"
            component={MealDetailsScreen}
            options={{ title: "Meal Details" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Button
        title={"click"}
        onPress={() => (theme === "dark" ? setThemeLight() : setThemeDark())}
      />
      {/*
      <FavoritesScreen />
      <FiltersScreen />
      */}
    </RootLayout>
  ) : (
    <Spinner size="large" />
  );
};

export default Layout;

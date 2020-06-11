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
        <Stack.Navigator
          initialRouteName="Categories"
          // mode="modal"
          // stack shared options
          screenOptions={{
            headerStyle: {
              backgroundColor: `${globalStyles[theme].clPrimary}`,
              elevation: `${theme === "dark" ? 0 : 4}`, // remove shadow on Android
              shadowOpacity: `${theme === "dark" ? 0 : 4}`, // remove shadow on iOS
            },
            headerTintColor: `${
              theme === "dark"
                ? globalStyles[theme].clFont
                : globalStyles[theme].clWhite
            }`,
            headerTitleStyle: {
              fontFamily: "lato",
            },
          }}
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
            options={({ route }) => ({
              title: route.params.title,
              headerStyle: {
                backgroundColor: `${
                  theme === "dark"
                    ? globalStyles[theme].clPrimary
                    : route.params.color
                }`,
                elevation: `${theme === "dark" ? 0 : 4}`, // remove shadow on Android
                shadowOpacity: `${theme === "dark" ? 0 : 4}`, // remove shadow on iOS
              },
            })}
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

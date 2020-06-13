import React, { useContext } from "react";

// navigator
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// context
import AppStore from "../../contexts/GlobalContext";

// components
import StatusBar from "../../components/StatusBar/StatusBar";
import Spinner from "../../components/Spinner/Spinner";
import HeaderRightContainer from "../../components/HeaderRightContainer/HeaderRightContainer";
import AddRecipeModal from "../../components/AddRecipeModal/AddRecipeModal";

// screens
import CategoriesScreen from "../CategoriesScreen/CategoriesScreen";
import FavoritesScreen from "../FavoritesScreen/FavoritesScreen";
import FiltersScreen from "../FiltersScreen/FiltersScreen";
import MealDetailsScreen from "../MealDetailsScreen/MealDetailsScreen";
import MealsScreen from "../MealsScreen/MealsScreen";

// sc
import {
  RootLayout,
  // style function
  headerShadowProperties,
  headerSharedBgColorProperties,
  headerSharedTitleValueProperties,
  getSharedThemeColor,
} from "./Layout.styles";

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
              ...headerShadowProperties(theme),
            },
            headerTintColor: getSharedThemeColor(theme, globalStyles),
            headerTitleStyle: {
              fontFamily: "lato",
              color: getSharedThemeColor(theme, globalStyles),
            },
            headerRight: () => <HeaderRightContainer />,
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
              title: headerSharedTitleValueProperties(route),
              headerStyle: {
                ...headerSharedBgColorProperties(theme, route),
                ...headerShadowProperties(theme),
              },
            })}
          />
          <Stack.Screen
            name="MealDetails"
            component={MealDetailsScreen}
            options={({ route }) => ({
              title: headerSharedTitleValueProperties(route),
              headerStyle: {
                ...headerSharedBgColorProperties(theme, route),
                ...headerShadowProperties(theme),
              },
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <AddRecipeModal />
    </RootLayout>
  ) : (
    <Spinner size="large" />
  );
};

export default Layout;

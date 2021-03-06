import React, { useContext } from "react";

// context
import AppStore from "../../contexts/GlobalContext";

// navigator
import { createStackNavigator } from "@react-navigation/stack";

// screens
import CategoriesScreen from "../../screens/CategoriesScreen/CategoriesScreen";
import MealDetailsScreen from "../../screens/MealDetailsScreen/MealDetailsScreen";
import MealsScreen from "../../screens/MealsScreen/MealsScreen";

// components
import HeaderRightContainer from "../../components/HeaderRightContainer/HeaderRightContainer";
import HeaderLeftContainer from "../../components/HeaderLeftContainer/HeaderLeftContainer";

// global styles
import globalStyles from "../../constants/globalStyles";

// sc
import {
  // style function
  headerShadowProperties,
  headerSharedBgColorProperties,
  headerSharedTitleValueProperties,
  getSharedThemeColor,
} from "./MealsStackNavigator.styles";

const MealsStackNav = createStackNavigator();

const MealsStackNavigator = () => {
  const { theme } = useContext(AppStore);

  return (
    <MealsStackNav.Navigator
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
        headerBackTitleStyle: {
          fontFamily: "lato",
          fontSize: 16,
        },
        headerRight: () => <HeaderRightContainer />,
      }}
    >
      <MealsStackNav.Screen
        name="Categories"
        component={CategoriesScreen}
        // stack screen own options
        options={({ navigation }) => ({
          title: "Categories",
          headerLeft: () => (
            <HeaderLeftContainer action={navigation.openDrawer} />
          ),
        })}
      />
      <MealsStackNav.Screen
        name="Meals"
        component={MealsScreen}
        options={({ route }) => ({
          title: headerSharedTitleValueProperties(route),
          headerStyle: {
            backgroundColor: headerSharedBgColorProperties(theme, route),
            ...headerShadowProperties(theme),
          },
        })}
      />
      <MealsStackNav.Screen
        name="MealDetails"
        component={MealDetailsScreen}
        options={({ route }) => ({
          title: headerSharedTitleValueProperties(route),
          headerStyle: {
            backgroundColor: headerSharedBgColorProperties(theme, route),
            ...headerShadowProperties(theme),
          },
        })}
      />
    </MealsStackNav.Navigator>
  );
};

export default MealsStackNavigator;

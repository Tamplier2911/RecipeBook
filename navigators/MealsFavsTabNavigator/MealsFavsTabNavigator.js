import React, { useContext } from "react";

// navigator
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// navigators
import MealsStackNavigator from "../MealsStackNavigator/MealsStackNavigator";
import FavStackNavigator from "../FavsStackNavigator/FavsStackNavigator";

// context
import AppStore from "../../contexts/GlobalContext";

// sc
import {
  // style functions
  getRespectiveTintColor,
  getRespectiveInactiveTintColor,
  getRespectiveBgColor,
  getRespectiveBorderTopWidth,
  renderRespectiveIconForTabNav,
} from "./MealsFavsTabNavigator.styles";

const MealsFavsTabNav = createBottomTabNavigator();

const MealsFavsTabNavigator = () => {
  const { theme } = useContext(AppStore);
  return (
    <MealsFavsTabNav.Navigator
      initialRouteName={"Dishes"}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) =>
          renderRespectiveIconForTabNav(route, focused, color, size),
      })}
      tabBarOptions={{
        style: {
          borderTopWidth: getRespectiveBorderTopWidth(theme),
          backgroundColor: getRespectiveBgColor(theme),
        },
        tabStyle: {},
        labelStyle: {
          fontFamily: "lato",
        },
        // activeBackgroundColor: "pink",
        // inactiveBackgroundColor: "pink",
        activeTintColor: getRespectiveTintColor(theme),
        inactiveTintColor: getRespectiveInactiveTintColor(theme),
      }}
    >
      <MealsFavsTabNav.Screen name="Dishes" component={MealsStackNavigator} />
      <MealsFavsTabNav.Screen name="Favorites" component={FavStackNavigator} />
    </MealsFavsTabNav.Navigator>
  );
};

export default MealsFavsTabNavigator;

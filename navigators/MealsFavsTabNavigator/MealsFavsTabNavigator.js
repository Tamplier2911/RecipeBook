import React, { useContext } from "react";
import { View, Text } from "react-native";

// navigator
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// navigators
import MealsStackNavigator from "../MealsStackNavigator/MealsStackNavigator";

// context
import AppStore from "../../contexts/GlobalContext";

// global styles
import globalStyles from "../../constants/globalStyles";

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

const TempFavorites = () => (
  <View>
    <Text>Favs</Text>
  </View>
);

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

        // activeBackgroundColor: "pink",
        // inactiveBackgroundColor: "pink",
        activeTintColor: getRespectiveTintColor(theme),
        inactiveTintColor: getRespectiveInactiveTintColor(theme),
      }}
    >
      <MealsFavsTabNav.Screen name="Dishes" component={MealsStackNavigator} />
      <MealsFavsTabNav.Screen name="Favorites" component={TempFavorites} />
    </MealsFavsTabNav.Navigator>
  );
};

export default MealsFavsTabNavigator;

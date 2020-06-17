import React, { useContext } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

// context
import AppStore from "../../contexts/GlobalContext";

// navigators
import MealsFavsTabNavigator from "../MealsFavsTabNavigator/MealsFavsTabNavigator";
import FiltersTabNavigator from "../FiltersTabNavigator/FiltersTabNavigator";

// sc
import {
  getRespectiveDrawerBgColor,
  getRespectiveDrawerOverlayColor,
  getRespectiveActiveTintColor,
  getRespectiveInactiveTintColor,
  getRespectiveActiveBgTintColor,
  getRespectiveInactiveBgTintColor,
} from "./MainDrawerNavigator.styles";

import { View, Text } from "react-native";

const MainDrawerNav = createDrawerNavigator();

const MainDrawerNavigator = () => {
  const { theme, orientation } = useContext(AppStore);
  return (
    <MainDrawerNav.Navigator
      initialRouteName="Kitchen"
      //   hideStatusBar
      drawerPosition="left"
      drawerType="front"
      drawerStyle={{
        width: orientation === "portrait" ? "60%" : "30%",
        backgroundColor: getRespectiveDrawerBgColor(theme),
      }}
      overlayColor={getRespectiveDrawerOverlayColor(theme)}
      edgeWidth={100}
      drawerContentOptions={{
        style: {},
        itemStyle: { alignItems: "flex-end" },
        labelStyle: {
          fontFamily: "lato",
          fontSize: 18,
        },
        contentContainerStyle: {},
        activeTintColor: getRespectiveActiveTintColor(theme),
        inactiveTintColor: getRespectiveInactiveTintColor(theme),
        activeBackgroundColor: getRespectiveActiveBgTintColor(theme),
        inactiveBackgroundColor: getRespectiveInactiveBgTintColor(theme),
      }}
    >
      <MainDrawerNav.Screen name="Kitchen" component={MealsFavsTabNavigator} />
      <MainDrawerNav.Screen name="Filters" component={FiltersTabNavigator} />
    </MainDrawerNav.Navigator>
  );
};

export default MainDrawerNavigator;

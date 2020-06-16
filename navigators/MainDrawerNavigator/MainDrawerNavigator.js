import React, { useContext } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

// context
import AppStore from "../../contexts/GlobalContext";

// navigators
import MealsFavsTabNavigator from "../MealsFavsTabNavigator/MealsFavsTabNavigator";

// components

// global styles
import globalStyles from "../../constants/globalStyles";

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

const PlaceholderComponentTwo = () => (
  <View>
    <Text>Drawerissimo 2</Text>
  </View>
);

const MainDrawerNavigator = () => {
  const { theme } = useContext(AppStore);
  return (
    <MainDrawerNav.Navigator
      initialRouteName="Kitchen"
      //   hideStatusBar
      drawerPosition="left"
      drawerType="front"
      drawerStyle={{
        width: "60%",
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
      <MainDrawerNav.Screen
        name="Filters"
        component={PlaceholderComponentTwo}
      />
    </MainDrawerNav.Navigator>
  );
};

export default MainDrawerNavigator;

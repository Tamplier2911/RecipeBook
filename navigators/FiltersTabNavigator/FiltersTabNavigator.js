import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// context
import AppStore from "../../contexts/GlobalContext";

// navigators
import FiltersStackNavigator from "../FiltersStackNavigator/FiltersStackNavigator";

// sc
import {
  getRespectiveTintColor,
  getRespectiveInactiveTintColor,
  getRespectiveBgColor,
  getRespectiveBorderTopWidth,
  renderRespectiveIconForTabNav,
} from "./FiltersTabNavigator.styles";

const FiltersTabNav = createBottomTabNavigator();

const FiltersTabNavigator = () => {
  const { theme, orientation } = useContext(AppStore);

  return (
    <FiltersTabNav.Navigator
      initialRouteName={"GlutenFree"}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) =>
          renderRespectiveIconForTabNav(
            route,
            focused,
            color,
            size,
            orientation
          ),
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
      <FiltersTabNav.Screen
        name="Gluten Free"
        component={FiltersStackNavigator}
      />
      <FiltersTabNav.Screen
        name="Lactose Free"
        component={FiltersStackNavigator}
      />
      <FiltersTabNav.Screen name="Vegan" component={FiltersStackNavigator} />
      <FiltersTabNav.Screen
        name="Vegetarian"
        component={FiltersStackNavigator}
      />
    </FiltersTabNav.Navigator>
  );
};

export default FiltersTabNavigator;

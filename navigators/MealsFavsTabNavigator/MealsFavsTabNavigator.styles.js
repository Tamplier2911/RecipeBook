import React from "react";
import styled from "styled-components/native";

// global styles
import globalStyles from "../../constants/globalStyles";

// icons
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

// STLYE FUNCTIONS

export const getRespectiveTintColor = (theme) =>
  theme === "dark"
    ? globalStyles[theme].clHighlight
    : globalStyles[theme].clSecondary;

export const getRespectiveInactiveTintColor = (theme) =>
  theme === "dark"
    ? globalStyles[theme].clTabInactive
    : globalStyles[theme].clTabInactive;

export const getRespectiveBgColor = (theme) =>
  theme === "dark"
    ? globalStyles[theme].clPrimary
    : globalStyles[theme].clPrimary;

export const getRespectiveBorderTopWidth = (theme) =>
  theme === "dark" ? 0 : 1;

export const renderRespectiveIconForTabNav = (route, focused, color, size) => {
  size = 30;
  return route.name === "Dishes" ? (
    <MaterialCommunityIcons
      name={focused ? "food-apple" : "food-apple-outline"}
      size={size}
      color={color}
    />
  ) : (
    <MaterialIcons
      name={focused ? "star" : "star-border"}
      size={size}
      color={color}
    />
  );
};

// ***************************************************

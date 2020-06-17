import styled from "styled-components/native";

// global styles
import globalStyles from "../../constants/globalStyles";

// SHARED STYLE FUNCTIONS

export const headerShadowProperties = (theme) => ({
  elevation: `${theme === "dark" ? 0 : 4}`, // remove shadow on Android
  shadowOpacity: `${theme === "dark" ? 0 : 4}, `, // remove shadow on iOS
});

export const headerSharedBgColorProperties = (theme, route) =>
  theme === "dark"
    ? globalStyles[theme].clPrimary
    : globalStyles[theme].clPrimary;

export const headerFilterTitleValueProperty = (route) => {
  return route.name;
};

export const headerSharedTitleValueProperties = (route) => {
  const {
    params: { meal, title },
  } = route;
  if (meal) return meal.title.length > 25 ? "Meal Details" : meal.title;
  return title.length > 25 ? "Meal Category" : title;
};

export const getSharedThemeColor = (theme, globalStyles) => {
  if (theme === "dark") return globalStyles[theme].clHighlight;
  return globalStyles[theme].clWhite;
};

/////////////////////////

import styled from "styled-components/native";

// global styles
import globalStyles from "../../constants/globalStyles";

// STYLING FUNCTIONS

export const getRespectiveDrawerBgColor = (theme) =>
  theme === "dark"
    ? globalStyles[theme].clPrimary
    : globalStyles[theme].clWhite;

export const getRespectiveDrawerOverlayColor = (theme) =>
  globalStyles[theme].clDrawerOverlay;

export const getRespectiveActiveTintColor = (theme) =>
  theme === "dark"
    ? globalStyles[theme].clHighlight
    : globalStyles[theme].clPrimary;

export const getRespectiveInactiveTintColor = (theme) =>
  theme === "dark" ? globalStyles[theme].clFont : globalStyles[theme].clFont;

export const getRespectiveActiveBgTintColor = (theme) => "transparent";

export const getRespectiveInactiveBgTintColor = (theme) => "transparent";

// ******************

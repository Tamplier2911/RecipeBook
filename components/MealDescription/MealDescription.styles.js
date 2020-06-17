import styled from "styled-components/native";

// globalStyles
import globalStyles from "../../constants/globalStyles";

export const MealDescriptionTouchable = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  margin-bottom: 10px;
`;

export const MealDescriptionView = styled.View`
  flex: 1;
  height: ${({ width }) => width * 0.4}px;
  width: 96%;

  border-radius: 5px;
  ${({ theme }) => `shadow-color: ${globalStyles[theme].clPrimeShadow};`}
  shadow-offset: 2px;
  shadow-opacity: 0.8;
  shadow-radius: 4px;
  elevation: 5;
`;

export const MealDescriptionBackground = styled.ImageBackground`
  border-radius: 5px;
  overflow: hidden;

  flex: 1;
  width: undefined;
  height: undefined;
  resize-mode: cover;
`;

export const MealDescriptionWrap = styled.View`
  flex: 1;
  padding: 5px;
`;

export const MealDescriptionTitleView = styled.View`
  flex: 1;
`;

export const MealDescriptionTitleWrap = styled.View`
  background-color: ${({ color, theme }) =>
    theme === "dark" ? globalStyles[theme].clPrimary : color};
  padding: 2px 10px;
  align-items: center;
  align-self: flex-start;
  margin-left: -5px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const MealDescriptionTitle = styled.Text`
  font-family: lato;
  font-size: 18px;
  color: ${({ theme }) =>
    theme === "dark"
      ? globalStyles[theme].clHighlight
      : globalStyles[theme].clWhite};
  ${({ from, theme }) =>
    from === "favorites" && theme === "dark"
      ? `color: ${globalStyles[theme].clHighlight};`
      : from === "favorites" && theme === "light"
      ? `color: ${globalStyles[theme].clPrimary};`
      : ``}

  ${({ color, theme, from }) =>
    color !== "#fff" && theme === "light" && from === "favorites"
      ? `color: ${globalStyles[theme].clWhite};`
      : color !== "#fff" && theme === "dark" && from === "favorites"
      ? `color: ${globalStyles[theme].clHighlight};`
      : ``}
`;

export const MealDescriptionDataView = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const MealDescriptionDataWrap = styled.View`
  background-color: ${({ color, theme }) =>
    theme === "dark" ? globalStyles[theme].clPrimary : color};
  flex-direction: row;
  padding: 2px 0px 2px 10px;
  align-items: center;
  margin-right: -5px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const MealDescriptionDataText = styled.Text`
  font-family: lato;
  font-size: 14px;
  color: ${({ theme }) =>
    theme === "dark"
      ? globalStyles[theme].clHighlight
      : globalStyles[theme].clWhite};
  ${({ from, theme, color }) => {
    return from === "favorites" && theme === "dark"
      ? `color: ${globalStyles[theme].clHighlight};`
      : from === "favorites" && theme === "light"
      ? `color: ${globalStyles[theme].clPrimary};`
      : ``;
  }}
  ${({ color, theme, from }) =>
    color !== "#fff" && theme === "light" && from === "favorites"
      ? `color: ${globalStyles[theme].clWhite};`
      : color !== "#fff" && theme === "dark" && from === "favorites"
      ? `color: ${globalStyles[theme].clHighlight};`
      : ``}
  margin-right: 10px;
`;

import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

export const MealCategoryTouchable = styled.TouchableOpacity`
  flex: 1;
  padding-top: 10px;
`;

export const MealCategoryTouchableAndroid = styled.TouchableNativeFeedback`
  flex: 1;
`;

export const MealCategoryViewAndroid = styled.View`
  flex: 1;
  padding: 5px;
  border-radius: 5px;
  overflow: hidden;
  elevation: 5;
`;

export const MealCategoryView = styled.View`
  ${({ width }) => `height: ${width * 0.35}px; width: ${width * 0.42}px`}
  ${({ color, theme }) =>
    theme === "dark"
      ? `background-color: ${globalStyles[theme].clPrimary};`
      : `background-color: ${color};`}
  align-self: center;
  flex: 1;
  align-items: flex-end;
  justify-content: center;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 10px;
  ${({ theme }) => `shadow-color: ${globalStyles[theme].clPrimeShadow};`}
  shadow-offset: 2px;
  shadow-opacity: 0.8;
  shadow-radius: 4px;
  elevation: 5;
`;

export const MealCategoryTextView = styled.View`
  background-color: ${({ theme }) =>
    theme === "dark"
      ? globalStyles[theme].clSecondary
      : globalStyles[theme].clSecondary};
  padding: 2px 10px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  margin-right: -5px;
`;

export const MealCategoryText = styled.Text`
  font-family: "lato";
  font-size: 18px;
  ${({ theme }) =>
    theme === "dark"
      ? `color: ${globalStyles[theme].clHighlight};`
      : `color: ${globalStyles[theme].clPrimary};`}
  ${() => ({ textAlign: "right" })}
`;

export const MealCategoryDeleteView = styled.View`
  flex: 1;
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: ${({ theme }) =>
    theme === "dark"
      ? globalStyles[theme].clSecondary
      : globalStyles[theme].clWhite};

  bottom: 10px;
  left: 10px;
  overflow: hidden;
`;

export const MealCategoryDeleteTouchable = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const MealCategoryDeleteIconView = styled.View``;

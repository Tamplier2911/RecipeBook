import styled from "styled-components";
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
  justify-content: flex-end;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 10px;
  ${({ theme }) => `shadow-color: ${globalStyles[theme].clPrimeShadow};`}
  shadow-offset: 2px;
  shadow-opacity: 0.8;
  shadow-radius: 4px;
  elevation: 5;
`;

export const MealCategoryText = styled.Text`
  font-family: "lato";
  font-size: 18px;
  ${({ theme }) =>
    theme === "dark"
      ? `color: ${globalStyles[theme].clHighlight};`
      : `color: ${globalStyles[theme].clWhite};`}
  ${() => ({ textAlign: "right" })}
`;

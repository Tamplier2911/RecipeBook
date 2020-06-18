import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

const getRespectiveBgColor = ({ theme }) =>
  `background-color: ${globalStyles[theme].clSecondary};`;

export const MealDetailsScreenView = styled.View`
  ${getRespectiveBgColor}
  flex: 1;
  padding: 10px;
`;

export const MealDetailsScreenScrollView = styled.ScrollView`
  flex: 1;
`;

export const MealDetailsScreenWrapper = styled.View`
  padding: 0 5px;
`;

export const MealDetailsScreenBlockView = styled.View`
  margin-bottom: 10px;
  flex: 1;
`;

export const MealDetailsScreenBlockHeaderView = styled.View`
  flex: 1;
  padding: 5px;
  align-items: center;
  margin-bottom: 5px;
`;

export const MealDetailsScreenBlockHeaderText = styled.Text`
  font-family: lato;
  font-size: 18px;
  color: ${({ color, theme }) =>
    color === "#fff"
      ? globalStyles[theme].clPrimary
      : theme === "dark"
      ? globalStyles[theme].clHighlight
      : color};
`;

export const MealDetailsScreenFiltersWrap = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const MealsDetailsScreenControlsView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const MealDetailsScreenButtonView = styled.View`
  width: 48%;
`;

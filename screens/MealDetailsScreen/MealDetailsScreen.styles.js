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
`;

export const MealDetailsScreenText = styled.Text``;

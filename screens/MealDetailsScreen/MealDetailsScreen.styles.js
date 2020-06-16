import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

const getRespectiveBgColor = ({ theme }) =>
  `background-color: ${globalStyles[theme].clSecondary};`;

export const MealDetailsScreenView = styled.View`
  ${getRespectiveBgColor}
  flex: 1;
  padding: 10px;
`;

export const MealDetailsScreenTop = styled.ScrollView`
  flex: 1;
`;

export const MealDetailsScreenText = styled.Text``;

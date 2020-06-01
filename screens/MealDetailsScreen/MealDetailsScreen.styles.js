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

export const MealDetailsScreenBot = styled.View`
  height: 10%;
  flex-direction: row;
  align-items: center;
`;

export const MealDetailsButtonView = styled.View`
  flex: 1;
`;

export const MealDetailsButtonSeparator = styled.View`
  width: 10%;
`;

export const MealDetailsScreenText = styled.Text``;

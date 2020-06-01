import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

const getRespectiveBgColor = ({ theme }) =>
  `background-color: ${globalStyles[theme].clSecondary};`;

export const MealsScreenView = styled.View`
  ${getRespectiveBgColor}
  flex: 1;
  padding: 10px;
`;

export const MealsScreenTop = styled.ScrollView`
  flex: 1;
`;

export const MealsScreenBot = styled.View`
  height: 10%;
  flex-direction: row;
  align-items: center;
`;

export const MealsButtonView = styled.View`
  flex: 1;
`;

export const MealsButtonSeparator = styled.View`
  width: 10%;
`;

export const MealsScreenText = styled.Text``;

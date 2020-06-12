import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

import { FlatList } from "react-native";

const getRespectiveBgColor = ({ theme }) =>
  `background-color: ${globalStyles[theme].clSecondary};`;

export const MealsScreenView = styled.View`
  ${getRespectiveBgColor}
  flex: 1;
  padding: 10px;
`;

export const MealsScreenFlatList = styled(FlatList)`
  flex: 1;
`;

export const MealView = styled.View``;

export const MealText = styled.Text``;

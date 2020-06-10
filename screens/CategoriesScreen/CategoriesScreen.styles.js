import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

import { FlatList } from "react-native";

const getRespectiveBgColor = ({ theme }) =>
  `background-color: ${globalStyles[theme].clSecondary};`;

export const CategoriesScreenView = styled.View`
  ${getRespectiveBgColor}
  flex: 1;
  padding: 10px;
`;

export const CategoriesFlatList = styled(FlatList)`
  flex: 1;
`;

export const CategoriesItemTouchable = styled.TouchableOpacity`
  flex: 1;
`;

export const CategoriesItemView = styled.View`
  flex: 1;
  padding: 5px;
  ${({ color }) => `background-color: ${color};`}
`;

export const CategoriesItemText = styled.Text``;

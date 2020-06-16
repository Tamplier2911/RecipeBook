import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

import { FlatList } from "react-native";

const getRespectiveBgColor = ({ theme }) =>
  `background-color: ${globalStyles[theme].clSecondary};`;

export const FavoritesScreenView = styled.View`
  ${getRespectiveBgColor}
  flex: 1;
  padding: 10px;
`;

export const FavoritesScreenFlatList = styled(FlatList)`
  flex: 1;
`;

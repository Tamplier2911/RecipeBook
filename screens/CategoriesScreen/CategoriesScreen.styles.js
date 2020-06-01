import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

const getRespectiveBgColor = ({ theme }) =>
  `background-color: ${globalStyles[theme].clSecondary};`;

export const CategoriesScreenView = styled.View`
  ${getRespectiveBgColor}
  flex: 1;
  padding: 10px;
`;

export const CategoriesScreenTop = styled.ScrollView`
  flex: 1;
`;

export const CategoriesScreenBot = styled.View`
  height: 10%;
  flex-direction: row;
  align-items: center;
`;

export const CategoriesButtonView = styled.View`
  flex: 1;
`;

export const CategoriesButtonSeparator = styled.View`
  width: 10%;
`;

export const CategoriesScreenText = styled.Text``;

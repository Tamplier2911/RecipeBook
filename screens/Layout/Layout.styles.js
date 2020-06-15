import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

const getRespectiveRootBgColor = ({ theme }) =>
  `background-color: ${globalStyles[theme].clSecondary};`;

export const RootLayout = styled.View`
  ${getRespectiveRootBgColor}
  flex: 1;
`;

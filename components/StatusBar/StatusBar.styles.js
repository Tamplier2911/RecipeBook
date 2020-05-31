import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

const GetStatusBarColor = ({ theme }) =>
  `background-color: ${globalStyles[theme].clStatusBar};`;

const GetStatusBarHeight = ({ height }) =>
  height ? `height: ${height}px;` : `height: 10%;`;

export const StatusBarView = styled.View`
  ${GetStatusBarColor}
  ${GetStatusBarHeight}
`;

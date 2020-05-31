import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

const getRespectiveBgColor = ({ theme }) =>
  theme === "dark"
    ? `background-color: ${globalStyles[theme].clPrimary};`
    : `background-color: ${globalStyles[theme].clWhite};`;

export const SpinnerView = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  ${getRespectiveBgColor}
`;

export const SpinnerElement = styled.ActivityIndicator``;

import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

const getBgColor = ({ theme }) =>
  theme === "dark"
    ? `background-color: ${globalStyles[theme].clHighlight};`
    : `background-color: ${globalStyles[theme].clPrimary};`;

const getTextColor = ({ theme }) =>
  theme === "dark"
    ? `color: ${globalStyles[theme].clFont};`
    : `color: ${globalStyles[theme].clWhite}`;

export const ButtonWrapperAndroid = styled.View`
  overflow: hidden;
`;

export const ButtonIOS = styled.TouchableOpacity``;

export const ButtonAndroid = styled.TouchableNativeFeedback``;

export const ButtonTitleWrapper = styled.View`
  ${getBgColor}
  padding: 10px;
  border-radius: 5px;
`;

export const ButtonTitle = styled.Text`
  ${getTextColor}
  font-family: lato;
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;
`;

export const ButtonIconView = styled.View`
  flex: 1;
  align-items: center;
`;

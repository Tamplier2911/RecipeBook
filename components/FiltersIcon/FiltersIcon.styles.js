import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

export const FiltersIconContainerView = styled.View`
  flex-direction: row;
  width: 50%;
`;

export const FiltersIconSignView = styled.View`
  justify-content: center;
  align-items: center;
`;

export const FiltersIconTextView = styled.View`
  flex: 1;
  justify-content: center;
  margin-left: 5px;
`;

export const FiltersIconText = styled.Text`
  font-family: lato;
  font-size: 16px;
  color: ${({ theme }) =>
    theme === "dark"
      ? globalStyles[theme].clHighlight
      : globalStyles[theme].clFont};
`;

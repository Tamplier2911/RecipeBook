import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

export const StepContainerView = styled.View`
  flex-direction: row;
  margin-bottom: 5px;
`;

export const StepIconView = styled.View`
  justify-content: center;
`;

export const StepTextView = styled.View`
  flex: 1;
`;

export const StepText = styled.Text`
  font-family: lato;
  font-size: 15px;
  color: ${({ theme }) =>
    theme === "dark"
      ? globalStyles[theme].clHighlight
      : globalStyles[theme].clFont};
`;

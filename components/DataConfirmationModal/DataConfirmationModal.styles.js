import styled from "styled-components/native";

// global styles
import globalStyles from "../../constants/globalStyles";

export const DataConfirmationModalElement = styled.Modal``;

export const DataConfirmationModalTouchable = styled.TouchableWithoutFeedback``;

export const DataConfirmationModalView = styled.View`
  flex: 1;
  background-color: ${({ theme }) => globalStyles[theme].clSecondary};
  padding: 10px;
  justify-content: center;
`;

export const DataConfirmationModalAvoidingView = styled.KeyboardAvoidingView``;

export const DataConfirmationModalControlsView = styled.View`
  background-color: ${({ theme }) =>
    theme === "dark"
      ? globalStyles[theme].clPrimary
      : globalStyles[theme].clSecondary};
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const DataConfirmationModalControlsTextView = styled.View`
  margin-bottom: 20px;
  align-items: center;
`;

export const DataConfirmationModalControlsText = styled.Text`
  color: ${({ theme }) =>
    theme === "dark"
      ? globalStyles[theme].clHighlight
      : globalStyles[theme].clPrimary}
  font-family: lato;
  font-size: 20px;
`;

export const DataConfirmationModalControlsButtonsView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const DataConfirmationModalControlsButtonsWrap = styled.View`
  width: 48%;
`;

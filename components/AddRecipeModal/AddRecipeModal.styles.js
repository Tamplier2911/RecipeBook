import styled from "styled-components/native";

// global styles
import globalStyles from "../../constants/globalStyles";

export const AddRecipeModalElement = styled.Modal``;

export const AddRecipeModalTouchable = styled.TouchableWithoutFeedback``;

export const AddRecipeModalView = styled.View`
  flex: 1;
  background-color: ${({ theme }) => globalStyles[theme].clSecondary};
  padding: 10px;
  justify-content: center;
`;

export const AddRecipeModalAvoidingView = styled.KeyboardAvoidingView``;

export const AddRecipeModalInputView = styled.View`
  background-color: ${({ theme }) =>
    theme === "dark"
      ? globalStyles[theme].clPrimary
      : globalStyles[theme].clSecondary};
  padding: 10px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const AddRecipeModalInput = styled.TextInput`
  font-family: lato;
  font-size: 16px;
  color: ${({ theme }) =>
    theme === "dark"
      ? globalStyles[theme].clHighlight
      : globalStyles[theme].clPrimary}
  border-color: ${({ theme }) =>
    theme === "dark"
      ? globalStyles[theme].clHighlight
      : globalStyles[theme].clPrimary};
  border-bottom-width: 2px;
  height: 40px;
  margin-bottom: 4px;
`;

export const AddRecipeModalButtonView = styled.View`
  background-color: ${({ theme }) =>
    theme === "dark"
      ? globalStyles[theme].clPrimary
      : globalStyles[theme].clSecondary};
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const AddRecipeButtonView = styled.View`
  width: 48%;
`;

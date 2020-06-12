import React, { useContext } from "react";

// context
import AppStore from "../../contexts/GlobalContext";

// iconic
import { MaterialIcons } from "@expo/vector-icons";

// global styles
import globalStyles from "../../constants/globalStyles";

// sc
import {
  AddRecipeButtonTouchable,
  AddRecipeButtonView,
  AddRecipeButtonText,
} from "./AddRecipeButton.styles";

const AddRecipeButton = () => {
  const { theme, recipeModalHidden, toggleRecipeModel } = useContext(AppStore);
  const isThemeDark = theme === "dark";
  const { clSecondary, clHighlight } = globalStyles[theme];
  return (
    <AddRecipeButtonTouchable onPress={toggleRecipeModel}>
      <AddRecipeButtonView>
        <AddRecipeButtonText>
          {recipeModalHidden ? (
            <MaterialIcons
              name="add-circle"
              size={25}
              color={isThemeDark ? clHighlight : clSecondary}
            />
          ) : (
            <MaterialIcons
              name="remove-circle"
              size={25}
              color={isThemeDark ? clHighlight : clSecondary}
            />
          )}
        </AddRecipeButtonText>
      </AddRecipeButtonView>
    </AddRecipeButtonTouchable>
  );
};

export default AddRecipeButton;

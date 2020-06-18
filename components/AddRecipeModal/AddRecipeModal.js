import React, { useContext, useState } from "react";
import { Keyboard } from "react-native";

// context
import AppStore from "../../contexts/GlobalContext";

// components
import Button from "../../components/Button/Button";

// global styles
import globalStyles from "../../constants/globalStyles";

// sc
import {
  AddRecipeModalElement,
  AddRecipeModalTouchable,
  AddRecipeModalView,
  AddRecipeModalAvoidingView,
  AddRecipeModalControlsView,
  AddRecipeModalTextView,
  AddRecipeModalText,
  AddRecipeModalSwitchView,
  AddRecipeModalSwitch,
  AddRecipeModalInputView,
  AddRecipeModalInput,
  AddRecipeModalButtonView,
  AddRecipeButtonView,
} from "./AddRecipeModal.styles";

const AddRecipeModal = () => {
  const { theme, platform, recipeModalHidden, toggleRecipeModel } = useContext(
    AppStore
  );

  const [switchSate, setSwitchState] = useState(false);

  // category state
  const [category, setCategory] = useState("");
  const [recipeDetails, setRecipeDetails] = useState("");

  {
    /* 
    complexity,     / easy / medium / hard
    imageUrl,       / url
    duration,       / 10 
    ingredients,    / potatoes, cucumbers
    steps,          / do that, do this, then that
    isGlutenFree,   / true / false - switch
    isLactoseFree,  / true / false - switch
    isVegan,        / true / false - switch
    isVegetarian    / true / false - switch
    */
  }
  // dish state

  const [] = useState(); // picker easy medium hard
  const [imageUrl, setImageUrl] = useState("");
  const [duration, setDuration] = useState(""); // number?
  // const [ingredients, setIngredients] = useState(""); // coma separated, then split
  // const [steps, setSteps] = setSteps] = useState("");  //comma separated, then split

  const onAddRecipe = (recipeData) => {
    console.log(recipeData);
  };

  const { clPlaceholder } = globalStyles[theme];

  return (
    <AddRecipeModalElement visible={!recipeModalHidden} animationType="slide">
      <AddRecipeModalTouchable onPress={Keyboard.dismiss}>
        <AddRecipeModalView theme={theme}>
          <AddRecipeModalAvoidingView
            behavior={platform === "ios" ? "padding" : "height"} // moves entire avoiding view
            // behavior="position" // moves only what inside of the view
          >
            <AddRecipeModalControlsView theme={theme}>
              <AddRecipeModalTextView>
                <AddRecipeModalText theme={theme}>
                  {switchSate ? "Add Recipe:" : "Add Category:"}
                </AddRecipeModalText>
              </AddRecipeModalTextView>
              <AddRecipeModalSwitchView>
                <AddRecipeModalSwitch
                  trackColor={{
                    false: globalStyles[theme].clSwitch,
                    true: globalStyles[theme].clSwitch,
                  }}
                  thumbColor={
                    theme === "dark"
                      ? globalStyles[theme].clHighlight
                      : globalStyles[theme].clPrimary
                  }
                  onValueChange={() =>
                    setSwitchState((switchSate) => !switchSate)
                  }
                  value={switchSate}
                />
              </AddRecipeModalSwitchView>
            </AddRecipeModalControlsView>

            <AddRecipeModalInputView theme={theme}>
              <AddRecipeModalInput
                theme={theme}
                placeholderTextColor={clPlaceholder}
                onChangeText={(text) => setCategory(text)}
                value={category}
                placeholder="Enter Category"
                theme={theme}
              />
              <AddRecipeModalInput
                theme={theme}
                placeholderTextColor={clPlaceholder}
                onChangeText={(text) => setRecipeDetails(text)}
                value={recipeDetails}
                placeholder="Enter Recipe Details"
                theme={theme}
              />
            </AddRecipeModalInputView>
            <AddRecipeModalButtonView theme={theme}>
              <AddRecipeButtonView>
                <Button
                  title="Add Recipe"
                  onPress={() => onAddRecipe({ category, recipeDetails })}
                />
              </AddRecipeButtonView>
              <AddRecipeButtonView>
                <Button
                  title="Back"
                  onPress={() => {
                    toggleRecipeModel();
                    setCategory("");
                    setRecipeDetails("");
                  }}
                />
              </AddRecipeButtonView>
            </AddRecipeModalButtonView>
          </AddRecipeModalAvoidingView>
        </AddRecipeModalView>
      </AddRecipeModalTouchable>
    </AddRecipeModalElement>
  );
};

export default AddRecipeModal;

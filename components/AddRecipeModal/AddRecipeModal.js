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
  AddRecipeModalInputView,
  AddRecipeModalInput,
  AddRecipeModalButtonView,
  AddRecipeButtonView,
} from "./AddRecipeModal.styles";

const AddRecipeModal = () => {
  const { theme, platform, recipeModalHidden, toggleRecipeModel } = useContext(
    AppStore
  );

  const [category, setCategory] = useState("");
  const [recipeDetails, setRecipeDetails] = useState("");

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
              {/* 
              complexity,     / easy / medium / hard
              imageUrl,       / url
              duration,       / 10 
              ingredients,    / potatoes, cucumbers
              steps,          / do that, do this, then that
              isGlutenFree,   / true / false - switch
              isLactoseFree,  / true / false - switch
              isVegan,        / true / false - switch
              isVegetarian    / true / false - switch
              */}
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

import React, { useContext, useState } from "react";
import { Keyboard } from "react-native";

// context
import AppStore from "../../contexts/GlobalContext";
import DataContext from "../../contexts/DataContext";

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
  AddRecipeModalControlsRecView,
  AddRecipeModalControlsRecWrap,
  AddRecipeModalControlsRecTextView,
  AddRecipeModalControlsRecText,
  AddRecipeModalControlsRecSwitchView,
  AddRecipeModalControlsRecSwitch,
  AddRecipeModalButtonView,
  AddRecipeModalButtonWrap,
} from "./AddRecipeModal.styles";

const AddRecipeModal = () => {
  const { theme, platform, recipeModalHidden, toggleRecipeModal } = useContext(
    AppStore
  );
  const { addNewCategory, addNewDish } = useContext(DataContext);

  // switch state
  const [switchSate, setSwitchState] = useState(false);

  // category state
  const [categoryName, setCategoryName] = useState("");
  const [color, setColor] = useState("");

  // dish state

  // id - added on initialization
  const [category, setCategory] = useState("");
  const [dishName, setDishName] = useState("");
  const [complexity, setComplexity] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [duration, setDuration] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const onAddNewCategory = () => {
    const category = {};

    if (!categoryName.length) return;
    if (!color.length) return;

    category.title = categoryName.trim();
    category.color = color.toLowerCase().trim();
    addNewCategory(category);
    setCategoryName("");
    setColor("");

    return toggleRecipeModal();
  };

  const onAddNewRecipe = () => {
    const recipe = {};

    if (!category.length) return;
    if (!dishName.length) return;
    if (!complexity.length) return;
    if (!imageUrl.length) return;
    if (!duration.length) return;
    if (!ingredients.length) return;
    if (!steps.length) return;

    recipe.category = category.trim().split(",");
    recipe.title = dishName.trim();
    recipe.complexity = complexity.trim().toLowerCase();
    recipe.imageUrl = imageUrl.trim().toLowerCase();
    recipe.duration = Number(duration);
    recipe.ingredients = ingredients.trim().split(",");
    recipe.steps = steps.trim().split(",");
    recipe.isGlutenFree = isGlutenFree;
    recipe.isLactoseFree = isLactoseFree;
    recipe.isVegan = isVegan;
    recipe.isVegetarian = isVegetarian;

    setCategory("");
    setDishName("");
    setComplexity("");
    setImageUrl("");
    setDuration("");
    setIngredients("");
    setSteps("");
    setIsGlutenFree(false);
    setIsLactoseFree(false);
    setIsVegan(false);
    setIsVegetarian(false);
    addNewDish(recipe);

    return toggleRecipeModal();
  };

  const { clPlaceholder } = globalStyles[theme];

  return (
    <AddRecipeModalElement visible={!recipeModalHidden} animationType="slide">
      <AddRecipeModalTouchable onPress={Keyboard.dismiss}>
        <AddRecipeModalView theme={theme}>
          <AddRecipeModalAvoidingView
            // moves entire avoiding view
            behavior={platform === "ios" ? "padding" : "height"}
            // moves only what inside of the view
            // behavior="position"
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

            {switchSate ? (
              <AddRecipeModalInputView theme={theme}>
                <AddRecipeModalInput
                  theme={theme}
                  placeholderTextColor={clPlaceholder}
                  onChangeText={(text) => setDishName(text)}
                  value={dishName}
                  placeholder="Enter Dish Name"
                  theme={theme}
                />
                <AddRecipeModalInput
                  theme={theme}
                  placeholderTextColor={clPlaceholder}
                  onChangeText={(text) => setCategory(text)}
                  value={category}
                  placeholder="Enter Category Name"
                  theme={theme}
                />
                <AddRecipeModalInput
                  theme={theme}
                  placeholderTextColor={clPlaceholder}
                  onChangeText={(text) => setComplexity(text)}
                  value={complexity}
                  placeholder="Enter Complexity"
                  theme={theme}
                />
                <AddRecipeModalInput
                  theme={theme}
                  placeholderTextColor={clPlaceholder}
                  onChangeText={(text) => setImageUrl(text)}
                  value={imageUrl}
                  placeholder="Enter Image Url"
                  theme={theme}
                />
                <AddRecipeModalInput
                  theme={theme}
                  placeholderTextColor={clPlaceholder}
                  onChangeText={(text) => setDuration(text)}
                  value={duration}
                  keyboardType="number-pad"
                  placeholder="Enter Duration in Minutes"
                  theme={theme}
                />
                <AddRecipeModalInput
                  theme={theme}
                  placeholderTextColor={clPlaceholder}
                  onChangeText={(text) => setIngredients(text)}
                  value={ingredients}
                  placeholder="Enter Ingredients"
                  theme={theme}
                />
                <AddRecipeModalInput
                  theme={theme}
                  placeholderTextColor={clPlaceholder}
                  onChangeText={(text) => setSteps(text)}
                  value={steps}
                  placeholder="Enter Order Steps"
                  theme={theme}
                />
                <AddRecipeModalControlsRecView theme={theme}>
                  <AddRecipeModalControlsRecWrap>
                    <AddRecipeModalControlsRecTextView>
                      <AddRecipeModalControlsRecText theme={theme}>
                        Is Gluten Free:
                      </AddRecipeModalControlsRecText>
                    </AddRecipeModalControlsRecTextView>
                    <AddRecipeModalControlsRecSwitchView>
                      <AddRecipeModalControlsRecSwitch
                        trackColor={{
                          false: globalStyles[theme].clSwitch,
                          true: globalStyles[theme].clSwitchTrue,
                        }}
                        thumbColor={
                          theme === "dark"
                            ? globalStyles[theme].clHighlight
                            : globalStyles[theme].clPrimary
                        }
                        onValueChange={() =>
                          setIsGlutenFree((isGlutenFree) => !isGlutenFree)
                        }
                        value={isGlutenFree}
                      />
                    </AddRecipeModalControlsRecSwitchView>
                  </AddRecipeModalControlsRecWrap>
                  <AddRecipeModalControlsRecWrap>
                    <AddRecipeModalControlsRecTextView>
                      <AddRecipeModalControlsRecText theme={theme}>
                        Is Lactose Free:
                      </AddRecipeModalControlsRecText>
                    </AddRecipeModalControlsRecTextView>
                    <AddRecipeModalControlsRecSwitchView>
                      <AddRecipeModalControlsRecSwitch
                        trackColor={{
                          false: globalStyles[theme].clSwitch,
                          true: globalStyles[theme].clSwitchTrue,
                        }}
                        thumbColor={
                          theme === "dark"
                            ? globalStyles[theme].clHighlight
                            : globalStyles[theme].clPrimary
                        }
                        onValueChange={() =>
                          setIsLactoseFree((isLactoseFree) => !isLactoseFree)
                        }
                        value={isLactoseFree}
                      />
                    </AddRecipeModalControlsRecSwitchView>
                  </AddRecipeModalControlsRecWrap>
                  <AddRecipeModalControlsRecWrap>
                    <AddRecipeModalControlsRecTextView>
                      <AddRecipeModalControlsRecText theme={theme}>
                        Is Vegan:
                      </AddRecipeModalControlsRecText>
                    </AddRecipeModalControlsRecTextView>
                    <AddRecipeModalControlsRecSwitchView>
                      <AddRecipeModalControlsRecSwitch
                        trackColor={{
                          false: globalStyles[theme].clSwitch,
                          true: globalStyles[theme].clSwitchTrue,
                        }}
                        thumbColor={
                          theme === "dark"
                            ? globalStyles[theme].clHighlight
                            : globalStyles[theme].clPrimary
                        }
                        onValueChange={() => setIsVegan((isVegan) => !isVegan)}
                        value={isVegan}
                      />
                    </AddRecipeModalControlsRecSwitchView>
                  </AddRecipeModalControlsRecWrap>
                  <AddRecipeModalControlsRecWrap>
                    <AddRecipeModalControlsRecTextView>
                      <AddRecipeModalControlsRecText theme={theme}>
                        Is Vegetarian:
                      </AddRecipeModalControlsRecText>
                    </AddRecipeModalControlsRecTextView>
                    <AddRecipeModalControlsRecSwitchView>
                      <AddRecipeModalControlsRecSwitch
                        trackColor={{
                          false: globalStyles[theme].clSwitch,
                          true: globalStyles[theme].clSwitchTrue,
                        }}
                        thumbColor={
                          theme === "dark"
                            ? globalStyles[theme].clHighlight
                            : globalStyles[theme].clPrimary
                        }
                        onValueChange={() =>
                          setIsVegetarian((isVegetarian) => !isVegetarian)
                        }
                        value={isVegetarian}
                      />
                    </AddRecipeModalControlsRecSwitchView>
                  </AddRecipeModalControlsRecWrap>
                </AddRecipeModalControlsRecView>
              </AddRecipeModalInputView>
            ) : (
              <AddRecipeModalInputView theme={theme}>
                <AddRecipeModalInput
                  theme={theme}
                  placeholderTextColor={clPlaceholder}
                  onChangeText={(text) => setCategoryName(text)}
                  value={categoryName}
                  placeholder="Enter Category Name"
                  theme={theme}
                />
                <AddRecipeModalInput
                  theme={theme}
                  placeholderTextColor={clPlaceholder}
                  onChangeText={(text) => setColor(text)}
                  value={color}
                  placeholder="Enter Display Color"
                  theme={theme}
                />
              </AddRecipeModalInputView>
            )}

            <AddRecipeModalButtonView theme={theme}>
              <AddRecipeModalButtonWrap>
                <Button
                  title="Back"
                  onPress={() => {
                    toggleRecipeModal();
                    setCategoryName("");
                    setColor("");
                  }}
                />
              </AddRecipeModalButtonWrap>
              <AddRecipeModalButtonWrap>
                <Button
                  title={switchSate ? "+ Recipe" : "+ Category"}
                  onPress={() =>
                    switchSate ? onAddNewRecipe() : onAddNewCategory()
                  }
                />
              </AddRecipeModalButtonWrap>
            </AddRecipeModalButtonView>
          </AddRecipeModalAvoidingView>
        </AddRecipeModalView>
      </AddRecipeModalTouchable>
    </AddRecipeModalElement>
  );
};

export default AddRecipeModal;

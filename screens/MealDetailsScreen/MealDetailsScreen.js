import React, { useContext } from "react";

// context
import AppStore from "../../contexts/GlobalContext";

// components
import MealDescription from "../../components/MealDescription/MealDescription";
import Button from "../../components/Button/Button";
import Step from "../../components/Step/Step";
import FilterIcon from "../../components/FiltersIcon/FiltersIcon";

// iconinc
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

// global styles
import globalStyles from "../../constants/globalStyles";

// cs
import {
  MealDetailsScreenView,
  MealDetailsScreenScrollView,
  MealDetailsScreenWrapper,
  MealDetailsScreenBlockView,
  MealDetailsScreenBlockHeaderView,
  MealDetailsScreenBlockHeaderText,
  MealDetailsScreenFiltersWrap,
  MealsDetailsScreenControlsView,
  MealDetailsScreenButtonView,
} from "./MealDetailsScreen.styles";

const MealDetailsScreen = ({ route }) => {
  const { theme } = useContext(AppStore);

  const { meal, color } = route.params;

  const {
    // title,
    // complexity,
    // imageUrl,
    // duration,
    ingredients,
    steps,
    isGlutenFree,
    isLactoseFree,
    isVegan,
    isVegetarian,
  } = meal;

  const iconColor = globalStyles[theme].clBtnIcon;
  const isFavorite = true;

  return (
    <MealDetailsScreenView theme={theme}>
      <MealDetailsScreenScrollView>
        <MealDescription
          meal={meal}
          color={color}
          {...(!color === "#fff" ? {} : { from: "favorites" })}
          action={() => {
            /** he was a punk, she did ballet, what more can I say? */
          }}
        />

        <MealDetailsScreenWrapper>
          <MealDetailsScreenBlockView>
            <MealDetailsScreenBlockHeaderView>
              <MealDetailsScreenBlockHeaderText theme={theme} color={color}>
                Ingredients:
              </MealDetailsScreenBlockHeaderText>
            </MealDetailsScreenBlockHeaderView>
            {ingredients.map((el, id) => (
              <Step key={el + id} color={color} theme={theme} content={el} />
            ))}
          </MealDetailsScreenBlockView>

          <MealDetailsScreenBlockView>
            <MealDetailsScreenBlockHeaderView>
              <MealDetailsScreenBlockHeaderText theme={theme} color={color}>
                Steps:
              </MealDetailsScreenBlockHeaderText>
            </MealDetailsScreenBlockHeaderView>
            {steps.map((el, id) => (
              <Step key={el + id} color={color} theme={theme} content={el} />
            ))}
          </MealDetailsScreenBlockView>

          <MealDetailsScreenBlockView>
            <MealDetailsScreenFiltersWrap>
              <FilterIcon
                bool={isGlutenFree}
                theme={theme}
                content={"Gluten free:"}
              />
              <FilterIcon
                bool={isLactoseFree}
                theme={theme}
                content={"Lactose free:"}
              />
              <FilterIcon bool={isVegan} theme={theme} content={"Vegan:"} />
              <FilterIcon
                bool={isVegetarian}
                theme={theme}
                content={"Vegetarian:"}
              />
            </MealDetailsScreenFiltersWrap>
          </MealDetailsScreenBlockView>

          <MealDetailsScreenBlockView>
            <MealsDetailsScreenControlsView>
              <MealDetailsScreenButtonView>
                <Button
                  title="Remove Recipe"
                  icon={
                    <Octicons name="trashcan" size={24} color={iconColor} />
                  }
                  onPress={() => console.log("remove recipe!")}
                />
              </MealDetailsScreenButtonView>

              <MealDetailsScreenButtonView>
                {isFavorite ? (
                  <Button
                    title="Remove from Favorite"
                    icon={
                      <FontAwesome name="star" size={24} color={iconColor} />
                    }
                    onPress={() => console.log("remove from favorites!")}
                  />
                ) : (
                  <Button
                    title="Add to Favorite"
                    icon={
                      <AntDesign name="staro" size={24} color={iconColor} />
                    }
                    onPress={() => console.log("add to favorites")}
                  />
                )}
              </MealDetailsScreenButtonView>
            </MealsDetailsScreenControlsView>
          </MealDetailsScreenBlockView>
        </MealDetailsScreenWrapper>
      </MealDetailsScreenScrollView>
    </MealDetailsScreenView>
  );
};

export default MealDetailsScreen;

import React, { useContext } from "react";

// context
import AppStore from "../../contexts/GlobalContext";

// components
import MealDescription from "../../components/MealDescription/MealDescription";
import Button from "../../components/Button/Button";

// global styles
import globalStyles from "../../constants/globalStyles";

// cs
import {
  MealDetailsScreenView,
  MealDetailsScreenScrollView,
  MealDetailsScreenWrapper,
  MealDetailsScreenBlockView,
  MealDetailsScreenText,
} from "./MealDetailsScreen.styles";

const MealDetailsScreen = ({ navigation, route }) => {
  const { theme } = useContext(AppStore);
  const { navigate } = navigation;

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

  return (
    <MealDetailsScreenView theme={theme}>
      <MealDetailsScreenScrollView>
        <MealDescription
          meal={meal}
          color={color}
          {...(!color === "#fff" ? {} : { from: "favorites" })}
          action={() => {
            /* toggle add to favorite on click */
          }}
        />

        <MealDetailsScreenWrapper>
          {/* ingredients block */}
          <MealDetailsScreenBlockView>
            <MealDetailsScreenText>required ingredients</MealDetailsScreenText>
            {ingredients.map((el, id) => (
              <MealDetailsScreenText key={el + id}>{el}</MealDetailsScreenText>
            ))}
          </MealDetailsScreenBlockView>

          {/* steps block */}
          <MealDetailsScreenBlockView>
            <MealDetailsScreenText>required steps</MealDetailsScreenText>
            {steps.map((el, id) => (
              <MealDetailsScreenText key={el + id}>{el}</MealDetailsScreenText>
            ))}
          </MealDetailsScreenBlockView>

          {/* icons block */}
          <MealDetailsScreenBlockView>
            <MealDetailsScreenText>
              Gluten free: {isGlutenFree ? "V" : "X"}
            </MealDetailsScreenText>
            <MealDetailsScreenText>
              Lactose free: {isLactoseFree ? "V" : "X"}
            </MealDetailsScreenText>
            <MealDetailsScreenText>
              Vegan: {isVegan ? "V" : "X"}
            </MealDetailsScreenText>
            <MealDetailsScreenText>
              Vegetarian: {isVegetarian ? "V" : "X"}
            </MealDetailsScreenText>
          </MealDetailsScreenBlockView>

          {/* controls block */}
          <MealDetailsScreenBlockView>
            <MealDetailsScreenText>
              tap on image in order to add / remove recipe to / from favorites
              list
            </MealDetailsScreenText>

            <Button
              title="Remove Recipe"
              onPress={() => console.log("remove recipe!")}
            />
          </MealDetailsScreenBlockView>
          {/*  */}
        </MealDetailsScreenWrapper>
      </MealDetailsScreenScrollView>
    </MealDetailsScreenView>
  );
};

export default MealDetailsScreen;

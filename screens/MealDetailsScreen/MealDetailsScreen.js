import React, { useContext } from "react";

// context
import AppStore from "../../contexts/GlobalContext";

// component
import Button from "../../components/Button/Button";
// component
import {
  MealDetailsScreenView,
  MealDetailsScreenTop,
  MealDetailsScreenText,
} from "./MealDetailsScreen.styles";

const MealDetailsScreen = ({ navigation, route }) => {
  const { theme } = useContext(AppStore);
  const { navigate } = navigation;

  const {
    title,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    isGlutenFree,
    isLactoseFree,
    isVegan,
    isVegetarian,
  } = route?.params?.meal;

  return (
    <MealDetailsScreenView theme={theme}>
      <MealDetailsScreenTop>
        <MealDetailsScreenText>{title}</MealDetailsScreenText>
      </MealDetailsScreenTop>
    </MealDetailsScreenView>
  );
};

export default MealDetailsScreen;

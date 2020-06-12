import React, { useContext } from "react";

// context
import AppStore from "../../contexts/GlobalContext";

// component
import Button from "../../components/Button/Button";

// constants
import { mealsData } from "../../constants/mealsData";

// sc
import {
  MealsScreenView,
  MealsScreenFlatList,
  MealView,
  MealText,
} from "./MealsScreen.styles";

const MealsScreen = ({ navigation, route }) => {
  const { theme } = useContext(AppStore);
  const { navigate } = navigation;
  const {
    params: { title, id },
  } = route;
  const meals = mealsData[id];
  return (
    <MealsScreenView theme={theme}>
      <MealsScreenFlatList
        numColumns={1}
        data={meals}
        renderItem={(data) => {
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
          } = data.item;
          return (
            <MealView>
              <MealText>{title}</MealText>
            </MealView>
          );
        }}
      />
    </MealsScreenView>
  );
};

export default MealsScreen;

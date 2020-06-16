import React, { useContext } from "react";

// context
import AppStore from "../../contexts/GlobalContext";

// component
import MealDescription from "../../components/MealDescription/MealDescription";

// constants
import { mealsData } from "../../constants/mealsData";

// sc
import { MealsScreenView, MealsScreenFlatList } from "./MealsScreen.styles";

const MealsScreen = ({ navigation, route }) => {
  const { theme } = useContext(AppStore);
  const { navigate } = navigation;
  const {
    params: { title, id, color },
  } = route;
  const meals = mealsData[id];

  return (
    <MealsScreenView theme={theme}>
      <MealsScreenFlatList
        numColumns={1}
        data={meals}
        renderItem={(data) => (
          <MealDescription
            meal={data.item}
            color={color}
            action={() => navigate("MealDetails", { meal: data.item, color })}
          />
        )}
      />
    </MealsScreenView>
  );
};

export default MealsScreen;

import React, { useContext } from "react";

// context
import AppStore from "../../contexts/GlobalContext";
import DataContest from "../../contexts/DataContext";

// component
import MealDescription from "../../components/MealDescription/MealDescription";
import Spinner from "../../components/Spinner/Spinner";

// sc
import { MealsScreenView, MealsScreenFlatList } from "./MealsScreen.styles";

const MealsScreen = ({ navigation, route }) => {
  const { theme, dataIsLoading } = useContext(AppStore);
  const { dishes } = useContext(DataContest);
  const { navigate } = navigation;
  const {
    params: { title, color },
  } = route;

  // filter for current category
  const dishesToRender = dishes.filter((dish) => dish.category.includes(title));

  return (
    <MealsScreenView theme={theme}>
      {dataIsLoading ? (
        <Spinner size="large" />
      ) : (
        <MealsScreenFlatList
          numColumns={1}
          data={dishesToRender}
          renderItem={(data) => (
            <MealDescription
              meal={data.item}
              color={color}
              action={() => navigate("MealDetails", { meal: data.item, color })}
            />
          )}
        />
      )}
    </MealsScreenView>
  );
};

export default MealsScreen;

import React, { useContext } from "react";

// context
import AppStore from "../../contexts/GlobalContext";

// component
import MealDescription from "../../components/MealDescription/MealDescription";

// global styles
import globalStyles from "../../constants/globalStyles";

// sc
import {
  FiltersScreenView,
  FiltersScreenFlatList,
} from "./FiltersScreen.styles";

// filters
import {
  isGlutenFree,
  isLactoseFree,
  isVegan,
  isVegetarian,
} from "../../utils/filters.js";

// temporary data
import { favoritesData } from "../../constants/favoritesData";

const FiltersScreen = ({ route, navigation }) => {
  const { theme } = useContext(AppStore);
  const { navigate } = navigation;

  let dataToRender;
  if (route.name === "Gluten Free") dataToRender = isGlutenFree(favoritesData);
  if (route.name === "Lactose Free")
    dataToRender = isLactoseFree(favoritesData);
  if (route.name === "Vegan") dataToRender = isVegan(favoritesData);
  if (route.name === "Vegetarian") dataToRender = isVegetarian(favoritesData);

  return (
    <FiltersScreenView theme={theme}>
      <FiltersScreenFlatList
        numColumns={1}
        data={dataToRender}
        renderItem={(data) => {
          const color =
            theme === "dark"
              ? globalStyles[theme].clPrimary
              : globalStyles[theme].clWhite;
          return (
            <MealDescription
              meal={data.item}
              color={color}
              from={"favorites"}
              action={() => navigate("MealDetails", { meal: data.item, color })}
            />
          );
        }}
      />
    </FiltersScreenView>
  );
};

export default FiltersScreen;

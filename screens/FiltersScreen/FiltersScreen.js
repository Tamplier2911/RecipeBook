import React, { useContext } from "react";

// context
import AppStore from "../../contexts/GlobalContext";
import DataContext from "../../contexts/DataContext";

// component
import MealDescription from "../../components/MealDescription/MealDescription";
import Spinner from "../../components/Spinner/Spinner";

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

const FiltersScreen = ({ route, navigation }) => {
  const { theme } = useContext(AppStore);
  const { dishes, dataIsLoading } = useContext(DataContext);
  const { navigate } = navigation;

  let dataToRender;
  if (route.name === "Gluten Free") dataToRender = isGlutenFree(dishes);
  if (route.name === "Lactose Free") dataToRender = isLactoseFree(dishes);
  if (route.name === "Vegan") dataToRender = isVegan(dishes);
  if (route.name === "Vegetarian") dataToRender = isVegetarian(dishes);

  return (
    <FiltersScreenView theme={theme}>
      {dataIsLoading ? (
        <Spinner size="large" />
      ) : (
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
                action={() =>
                  navigate("MealDetails", { meal: data.item, color })
                }
              />
            );
          }}
        />
      )}
    </FiltersScreenView>
  );
};

export default FiltersScreen;

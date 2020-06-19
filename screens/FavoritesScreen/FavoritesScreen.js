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
  FavoritesScreenView,
  FavoritesScreenFlatList,
} from "./FavoritesScreen.styles";

const FavoritesScreen = ({ navigation }) => {
  const { theme } = useContext(AppStore);
  const { dishes, dataIsLoading } = useContext(DataContext);
  const { navigate } = navigation;

  // filter for only favorite dishes
  const favoriteDishes = dishes.filter((dish) => dish.isFavorite);

  return (
    <FavoritesScreenView theme={theme}>
      {dataIsLoading ? (
        <Spinner size="large" />
      ) : (
        <FavoritesScreenFlatList
          numColumns={1}
          data={favoriteDishes}
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
    </FavoritesScreenView>
  );
};

export default FavoritesScreen;

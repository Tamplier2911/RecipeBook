import React, { useContext } from "react";

// context
import AppStore from "../../contexts/GlobalContext";

// component
import MealDescription from "../../components/MealDescription/MealDescription";

// global styles
import globalStyles from "../../constants/globalStyles";

// sc
import {
  FavoritesScreenView,
  FavoritesScreenFlatList,
} from "./FavoritesScreen.styles";

// temporary data
import { favoritesData } from "../../constants/favoritesData";

const FavoritesScreen = ({ navigation }) => {
  const { theme } = useContext(AppStore);
  const { navigate } = navigation;
  return (
    <FavoritesScreenView theme={theme}>
      <FavoritesScreenFlatList
        numColumns={1}
        data={favoritesData}
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
    </FavoritesScreenView>
  );
};

export default FavoritesScreen;

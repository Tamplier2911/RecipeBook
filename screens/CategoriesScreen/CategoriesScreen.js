import React, { useContext } from "react";

// context
import AppStore from "../../contexts/GlobalContext";
import DataContext from "../../contexts/DataContext";

// component
import MealCategory from "../../components/MealCategory/MealCategory";
import Spinner from "../../components/Spinner/Spinner";

// sc
import {
  CategoriesScreenView,
  CategoriesFlatList,
} from "./CategoriesScreen.styles";

const CategoriesScreen = ({ navigation }) => {
  const { theme } = useContext(AppStore);
  const { categories, dataIsLoading } = useContext(DataContext);
  const { navigate } = navigation;

  // navigate - navigate to existing route, opens when there no such route on stack
  // push - push new route on to the stack, possibly with params
  // goBack - programatically navigate to previous screen in the stack
  // popToTop - programatically navigate to the first screen in the stack (can use navigate('HomeScreenName))
  // replace - just like a push but replaces current screen with one that set in replace (cannot go back from it)

  return dataIsLoading ? (
    <Spinner size="large" />
  ) : (
    <CategoriesScreenView theme={theme}>
      <CategoriesFlatList
        numColumns={2}
        data={categories}
        renderItem={(data) => {
          const { id, color, title } = data.item;
          return (
            <MealCategory
              color={color}
              title={title}
              action={() => navigate("Meals", { title, color, id })}
            />
          );
        }}
      />
    </CategoriesScreenView>
  );
};

export default CategoriesScreen;

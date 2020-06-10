import React, { useContext } from "react";

// context
import AppStore from "../../contexts/GlobalContext";

// component
import Button from "../../components/Button/Button";

// sc
import {
  CategoriesScreenView,
  CategoriesFlatList,
  CategoriesItemTouchable,
  CategoriesItemView,
  CategoriesItemText,
} from "./CategoriesScreen.styles";

// constants
import { categoriesData } from "../../constants/categoriesData";
import { View, Text } from "react-native";

const CategoriesScreen = ({ navigation }) => {
  const { theme } = useContext(AppStore);
  const { navigate, push } = navigation;
  //

  // navigate - navigate to existing route, opens when there no such route on stack
  // push - push new route on to the stack, possibly with params
  // goBack - programatically navigate to previous screen in the stack
  // popToTop - programatically navigate to the first screen in the stack (can use navigate('HomeScreenName))
  // replace - just like a push but replaces current screen with one that set in replace (cannot go back from it)

  return (
    <CategoriesScreenView theme={theme}>
      <CategoriesFlatList
        numColumns={2}
        data={categoriesData}
        renderItem={(data) => {
          const { id, color, title } = data.item;
          return (
            <CategoriesItemTouchable
              activeOpacity={0.5}
              onPress={() =>
                navigate("Meals", { title: `${title}`, color: `${color}` })
              }
            >
              <CategoriesItemView color={color}>
                <CategoriesItemText>{title}</CategoriesItemText>
              </CategoriesItemView>
            </CategoriesItemTouchable>
          );
        }}
      />
    </CategoriesScreenView>
  );
};

export default CategoriesScreen;

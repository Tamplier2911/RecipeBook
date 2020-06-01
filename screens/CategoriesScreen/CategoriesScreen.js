import React, { useContext } from "react";

// context
import AppStore from "../../contexts/GlobalContext";

// component
import Button from "../../components/Button/Button";

// sc
import {
  CategoriesScreenView,
  CategoriesScreenTop,
  CategoriesScreenText,
  CategoriesScreenBot,
  CategoriesButtonView,
  CategoriesButtonSeparator,
} from "./CategoriesScreen.styles";

const CategoriesScreen = ({ navigation }) => {
  const { theme } = useContext(AppStore);
  const { navigate, push } = navigation;

  // navigate - navigate to existing route, opens when there no such route on stack
  // push - push new route on to the stack, possibly with params
  // goBack - programatically navigate to previous screen in the stack
  // popToTop - programatically navigate to the first screen in the stack (can use navigate('HomeScreenName))

  return (
    <CategoriesScreenView theme={theme}>
      <CategoriesScreenTop>
        <CategoriesScreenText>Categories Screen Top</CategoriesScreenText>
      </CategoriesScreenTop>
      <CategoriesScreenBot>
        <CategoriesButtonView>
          <Button title={"back"} onPress={() => push("Categories")} />
        </CategoriesButtonView>
        <CategoriesButtonSeparator />
        <CategoriesButtonView>
          <Button title={"to meals"} onPress={() => navigate("Meals")} />
        </CategoriesButtonView>
      </CategoriesScreenBot>
    </CategoriesScreenView>
  );
};

export default CategoriesScreen;

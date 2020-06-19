import React, { useContext, useEffect } from "react";

// navigator
import { NavigationContainer } from "@react-navigation/native";

// context
import AppStore from "../../contexts/GlobalContext";
import DataContext from "../../contexts/DataContext";

// navigators
import MainDrawerNavigator from "../../navigators/MainDrawerNavigator/MainDrawerNavigator";

// components
import StatusBar from "../../components/StatusBar/StatusBar";
import Spinner from "../../components/Spinner/Spinner";

// modals
import AddRecipeModal from "../../components/AddRecipeModal/AddRecipeModal";
import DataConfirmationModal from "../../components/DataConfirmationModal/DataConfirmationModal";

// sc
import { RootLayout } from "./Layout.styles";

const Layout = ({ fontLoaded }) => {
  const { theme, orientation } = useContext(AppStore);

  const { categories, fetchAllCategories, fetchAllDishes } = useContext(
    DataContext
  );

  useEffect(() => {
    fetchAllCategories();
    fetchAllDishes();
  }, []);

  return fontLoaded ? (
    <RootLayout theme={theme}>
      {orientation === "portrait" ? <StatusBar /> : null}
      <NavigationContainer>
        <MainDrawerNavigator />
      </NavigationContainer>
      <AddRecipeModal />
      <DataConfirmationModal />
    </RootLayout>
  ) : (
    <Spinner size="large" />
  );
};

export default Layout;

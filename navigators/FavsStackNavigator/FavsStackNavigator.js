import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";

// context
import AppStore from "../../contexts/GlobalContext";

// screens
import FavoritesScreen from "../../screens/FavoritesScreen/FavoritesScreen";
import MealDetailsScreen from "../../screens/MealDetailsScreen/MealDetailsScreen";

// component
import HeaderRightContainer from "../../components/HeaderRightContainer/HeaderRightContainer";
import HeaderLeftContainer from "../../components/HeaderLeftContainer/HeaderLeftContainer";

// global styles
import globalStyles from "../../constants/globalStyles";

// sc
import {
  // styling functions
  headerShadowProperties,
  getSharedThemeColor,
  headerSharedTitleValueProperties,
} from "./FavsStackNavigator.styles";

const FavStackNav = createStackNavigator();

const FavsStackNavigator = () => {
  const { theme } = useContext(AppStore);

  return (
    <FavStackNav.Navigator
      initialRouteName="Favorites"
      screenOptions={{
        headerStyle: {
          backgroundColor: `${globalStyles[theme].clPrimary}`,
          ...headerShadowProperties(theme),
        },
        headerTintColor: getSharedThemeColor(theme, globalStyles),
        headerTitleStyle: {
          fontFamily: "lato",
          color: getSharedThemeColor(theme, globalStyles),
        },
        headerBackTitleStyle: {
          fontFamily: "lato",
          fontSize: 16,
        },
        headerRight: () => <HeaderRightContainer />,
      }}
    >
      <FavStackNav.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={({ navigation }) => ({
          title: "Categories",
          headerLeft: () => (
            <HeaderLeftContainer action={navigation.openDrawer} />
          ),
        })}
      />

      <FavStackNav.Screen
        name="MealDetails"
        component={MealDetailsScreen}
        options={({ route }) => ({
          title: headerSharedTitleValueProperties(route),
          headerStyle: {
            backgroundColor: `${globalStyles[theme].clPrimary}`,
            ...headerShadowProperties(theme),
          },
        })}
      />
    </FavStackNav.Navigator>
  );
};

export default FavsStackNavigator;

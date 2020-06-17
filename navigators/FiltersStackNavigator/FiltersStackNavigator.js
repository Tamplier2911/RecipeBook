import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";

// context
import AppStore from "../../contexts/GlobalContext";

// screens
import FiltersScreen from "../../screens/FiltersScreen/FiltersScreen";
import MealDetailsScreen from "../../screens/MealDetailsScreen/MealDetailsScreen";

// components
import HeaderRightContainer from "../../components/HeaderRightContainer/HeaderRightContainer";
import HeaderLeftContainer from "../../components/HeaderLeftContainer/HeaderLeftContainer";

// global styles
import globalStyles from "../../constants/globalStyles";

// sc
import {
  // styling functions
  headerShadowProperties,
  getSharedThemeColor,
  headerFilterTitleValueProperty,
  headerSharedBgColorProperties,
  headerSharedTitleValueProperties,
} from "./FiltersStackNavigator.styles";

const GluFreeStackNav = createStackNavigator();

const GlutenFreeStackNavigator = ({ route: { name } }) => {
  const { theme } = useContext(AppStore);

  return (
    <GluFreeStackNav.Navigator
      initialRouteName="Lactose Free"
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
        // headerBack... has much more styles to be applied
        headerBackTitleStyle: {
          fontFamily: "lato",
          fontSize: 16,
        },
        headerRight: () => <HeaderRightContainer />,
      }}
    >
      <GluFreeStackNav.Screen
        name={name}
        component={FiltersScreen}
        // stack screen own options
        options={({ navigation, route }) => ({
          title: headerFilterTitleValueProperty(route),
          headerLeft: () => (
            <HeaderLeftContainer action={navigation.openDrawer} />
          ),
        })}
      />
      <GluFreeStackNav.Screen
        name="MealDetails"
        component={MealDetailsScreen}
        options={({ route }) => ({
          title: headerSharedTitleValueProperties(route),
          headerStyle: {
            backgroundColor: headerSharedBgColorProperties(theme, route),
            ...headerShadowProperties(theme),
          },
        })}
      />
    </GluFreeStackNav.Navigator>
  );
};

export default GlutenFreeStackNavigator;

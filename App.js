import React from "react";
import { enableScreens } from "react-native-screens";

// context
import { GlobalStore } from "./contexts/GlobalContext";

// fonts
import { useFonts } from "@use-expo/font";

// screens
import Layout from "./screens/Layout/Layout";

// optimize screens to be compiled as native widgets
enableScreens();

const App = () => {
  const [fontLoaded] = useFonts({
    lato: require("./assets/Fonts/Lato-Regular.ttf"),
    latoLight: require("./assets/Fonts/Lato-Light.ttf"),
  });
  return (
    <GlobalStore>
      <Layout fontLoaded={fontLoaded} />
    </GlobalStore>
  );
};

export default App;

// npm install --save react-navigation-stack
// Also add this import in the file where you are using createStackNavigator:
// import { createStackNavigator } from 'react-navigation-stack';
// npm install --save react-navigation-tabs
// import { createBottomTabNavigator } from 'react-navigation-tabs';
// npm install --save react-navigation-drawer
// import { createDrawerNavigator } from 'react-navigation-drawer';

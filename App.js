import React from "react";
import { enableScreens } from "react-native-screens";

// context
import { GlobalStore } from "./contexts/GlobalContext";
import { DataContext } from "./contexts/DataContext";

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
      <DataContext>
        <Layout fontLoaded={fontLoaded} />
      </DataContext>
    </GlobalStore>
  );
};

export default App;

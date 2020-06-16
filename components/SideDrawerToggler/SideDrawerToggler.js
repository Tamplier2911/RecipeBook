import React, { useContext } from "react";

// context
import AppStore from "../../contexts/GlobalContext";

// iconic
import { MaterialIcons } from "@expo/vector-icons";

// global styles
import globalStyles from "../../constants/globalStyles";

// sc
import {
  SideDrawerTogglerTouchable,
  SideDrawerTogglerView,
  SideDrawerTogglerText,
} from "./SideDrawerToggler.styles";

const SideDrawerToggler = ({ action }) => {
  const { theme } = useContext(AppStore);

  return (
    <SideDrawerTogglerTouchable onPress={action}>
      <SideDrawerTogglerView>
        <SideDrawerTogglerText>
          <MaterialIcons
            name="menu"
            size={25}
            color={
              theme === "dark"
                ? globalStyles[theme].clHighlight
                : globalStyles[theme].clWhite
            }
          />
        </SideDrawerTogglerText>
      </SideDrawerTogglerView>
    </SideDrawerTogglerTouchable>
  );
};

export default SideDrawerToggler;

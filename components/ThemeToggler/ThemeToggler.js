import React, { useContext } from "react";

// context
import AppStore from "../../contexts/GlobalContext";

// iconic
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

// global styles
import globalStyles from "../../constants/globalStyles";

// sc
import {
  ThemeTogglerTouchable,
  ThemeTogglerView,
  ThemeTogglerText,
} from "./ThemeToggler.styles";

const ThemeToggler = () => {
  const { theme, setThemeLight, setThemeDark } = useContext(AppStore);
  const isThemeDark = theme === "dark";
  const { clSecondary, clHighlight } = globalStyles[theme];
  return (
    <ThemeTogglerTouchable
      onPress={() => (theme === "dark" ? setThemeLight() : setThemeDark())}
    >
      <ThemeTogglerView>
        <ThemeTogglerText>
          {isThemeDark ? (
            <Feather name="sun" size={25} color={clHighlight} />
          ) : (
            <Ionicons name="md-moon" size={25} color={clSecondary} />
          )}
        </ThemeTogglerText>
      </ThemeTogglerView>
    </ThemeTogglerTouchable>
  );
};

export default ThemeToggler;

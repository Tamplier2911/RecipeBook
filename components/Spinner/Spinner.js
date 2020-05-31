import React, { useContext } from "react";
import globalStyles from "../../constants/globalStyles";

// context
import AppStore from "../../contexts/GlobalContext";

// sc
import { SpinnerView, SpinnerElement } from "./Spinner.styles";

const Spinner = ({ size }) => {
  const { theme } = useContext(AppStore);
  const spinnerColor =
    theme === "dark"
      ? globalStyles[theme].clHighlight
      : globalStyles[theme].clPrimary;
  return (
    <SpinnerView theme={theme}>
      <SpinnerElement size={size} color={spinnerColor} />
    </SpinnerView>
  );
};

export default Spinner;

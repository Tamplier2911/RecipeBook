import React, { useContext } from "react";

// context
import AppStore from "../../contexts/GlobalContext";

// sc
import { ButtonIOS, ButtonTitleWrapper, ButtonTitle } from "./Button.styles";

const Button = ({ title, onPress }) => {
  const { theme } = useContext(AppStore);
  return (
    <ButtonIOS activeOpacity={0.5} onPress={() => (onPress ? onPress() : null)}>
      <ButtonTitleWrapper theme={theme}>
        <ButtonTitle theme={theme}>{title}</ButtonTitle>
      </ButtonTitleWrapper>
    </ButtonIOS>
  );
};

export default Button;

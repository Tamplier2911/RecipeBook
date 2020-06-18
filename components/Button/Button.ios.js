import React, { useContext } from "react";

// context
import AppStore from "../../contexts/GlobalContext";

// sc
import {
  ButtonIOS,
  ButtonTitleWrapper,
  ButtonTitle,
  ButtonIconView,
} from "./Button.styles";

const Button = ({ title, onPress, icon }) => {
  const { theme } = useContext(AppStore);
  return (
    <ButtonIOS activeOpacity={0.5} onPress={() => (onPress ? onPress() : null)}>
      <ButtonTitleWrapper theme={theme}>
        {icon ? (
          <ButtonIconView>{icon}</ButtonIconView>
        ) : (
          <ButtonTitle theme={theme}>{title}</ButtonTitle>
        )}
      </ButtonTitleWrapper>
    </ButtonIOS>
  );
};

export default Button;

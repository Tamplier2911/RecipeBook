import React, { useContext } from "react";

// context
import AppStore from "../../contexts/GlobalContext";

// sc
import {
  ButtonWrapperAndroid,
  ButtonAndroid,
  ButtonTitleWrapper,
  ButtonTitle,
} from "./Button.styles";

const Button = ({ title, onPress }) => {
  const { theme } = useContext(AppStore);
  return (
    <ButtonWrapperAndroid>
      <ButtonAndroid
        activeOpacity={0.5}
        onPress={() => (onPress ? onPress() : null)}
      >
        <ButtonTitleWrapper theme={theme}>
          <ButtonTitle theme={theme}>{title}</ButtonTitle>
        </ButtonTitleWrapper>
      </ButtonAndroid>
    </ButtonWrapperAndroid>
  );
};

export default Button;

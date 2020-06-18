import React from "react";

// iconic
import { Entypo } from "@expo/vector-icons";

// global styles
import globalStyles from "../../constants/globalStyles";

// sc
import {
  StepContainerView,
  StepIconView,
  StepTextView,
  StepText,
} from "./Step.styles";

const Step = ({ color, theme, content }) => {
  color =
    color === "#fff" && theme === "light"
      ? globalStyles[theme].clPrimary
      : theme === "dark"
      ? globalStyles[theme].clHighlight
      : color;
  return (
    <StepContainerView>
      <StepIconView>
        <Entypo name="dot-single" size={24} color={color} />
      </StepIconView>
      <StepTextView>
        <StepText theme={theme}>{content}</StepText>
      </StepTextView>
    </StepContainerView>
  );
};

export default Step;

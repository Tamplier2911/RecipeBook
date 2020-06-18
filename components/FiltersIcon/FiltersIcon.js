import React from "react";

// iconic
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

// global styles
import globalStyles from "../../constants/globalStyles";

// sc
import {
  FiltersIconContainerView,
  FiltersIconSignView,
  FiltersIconTextView,
  FiltersIconText,
} from "./FiltersIcon.styles";

const FilterIcon = ({ bool, theme, content }) => {
  const posColor = globalStyles[theme].clPos;
  const negColor = globalStyles[theme].clNeg;

  return (
    <FiltersIconContainerView>
      <FiltersIconTextView>
        <FiltersIconText theme={theme}>{content}</FiltersIconText>
      </FiltersIconTextView>
      <FiltersIconSignView>
        {bool ? (
          <AntDesign name="checksquare" size={24} color={posColor} />
        ) : (
          <Entypo name="squared-cross" size={24} color={negColor} />
        )}
      </FiltersIconSignView>
    </FiltersIconContainerView>
  );
};

export default FilterIcon;

import React, { useContext } from "react";

// global context
import AppStore from "../../contexts/GlobalContext";

// sc
import {
  MealCategoryTouchable,
  MealCategoryTouchableAndroid,
  MealCategoryViewAndroid,
  MealCategoryView,
  MealCategoryTextView,
  MealCategoryText,
} from "./MealCategory.styles";

const MealCategory = ({ color, title, action }) => {
  const { width, theme, platform, version } = useContext(AppStore);
  return platform === "android" && version >= 21 ? (
    <MealCategoryViewAndroid>
      <MealCategoryTouchableAndroid onPress={action}>
        <MealCategoryView color={color} width={width} theme={theme}>
          <MealCategoryTextView theme={theme}>
            <MealCategoryText theme={theme} numberOfLines={2}>
              {title}
            </MealCategoryText>
          </MealCategoryTextView>
        </MealCategoryView>
      </MealCategoryTouchableAndroid>
    </MealCategoryViewAndroid>
  ) : (
    <MealCategoryTouchable activeOpacity={0.5} onPress={action}>
      <MealCategoryView color={color} width={width} theme={theme}>
        <MealCategoryTextView theme={theme}>
          <MealCategoryText theme={theme} numberOfLines={2}>
            {title}
          </MealCategoryText>
        </MealCategoryTextView>
      </MealCategoryView>
    </MealCategoryTouchable>
  );
};

export default MealCategory;

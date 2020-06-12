import React, { useContext } from "react";

// global context
import AppStore from "../../contexts/GlobalContext";

// sc
import {
  MealCategoryTouchable,
  MealCategoryTouchableAndroid,
  MealCategoryViewAndroid,
  MealCategoryView,
  MealCategoryText,
} from "./MealCategory.styles";

const MealCategory = ({ color, title, action }) => {
  const { width, theme, platform } = useContext(AppStore);
  return platform === "ios" ? (
    <MealCategoryTouchable activeOpacity={0.5} onPress={action}>
      <MealCategoryView color={color} width={width} theme={theme}>
        <MealCategoryText theme={theme} numberOfLines={2}>
          {title}
        </MealCategoryText>
      </MealCategoryView>
    </MealCategoryTouchable>
  ) : (
    <MealCategoryViewAndroid>
      <MealCategoryTouchableAndroid onPress={action}>
        <MealCategoryView color={color} width={width} theme={theme}>
          <MealCategoryText theme={theme} numberOfLines={2}>
            {title}
          </MealCategoryText>
        </MealCategoryView>
      </MealCategoryTouchableAndroid>
    </MealCategoryViewAndroid>
  );
};

export default MealCategory;

import React, { useContext } from "react";

// global context
import AppStore from "../../contexts/GlobalContext";
import DataContext from "../../contexts/DataContext";

// iconinc
import { MaterialCommunityIcons } from "@expo/vector-icons";

// global styles
import globalStyles from "../../constants/globalStyles";

// sc
import {
  MealCategoryTouchable,
  MealCategoryTouchableAndroid,
  MealCategoryViewAndroid,
  MealCategoryView,
  MealCategoryTextView,
  MealCategoryText,
  MealCategoryDeleteView,
  MealCategoryDeleteTouchable,
  MealCategoryDeleteIconView,
} from "./MealCategory.styles";

const MealCategory = ({ color, title, action }) => {
  const { width, theme, platform, version } = useContext(AppStore);
  const { openDataModal } = useContext(DataContext);

  const iconColor =
    theme === "dark"
      ? globalStyles[theme].clHighlight
      : globalStyles[theme].clPrimary;

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

        <MealCategoryDeleteView theme={theme}>
          <MealCategoryDeleteTouchable
            activeOpacity={0.6}
            onPress={() => openDataModal(title)}
          >
            <MealCategoryDeleteIconView>
              <MaterialCommunityIcons
                name="delete-circle-outline"
                size={24}
                color={iconColor}
              />
            </MealCategoryDeleteIconView>
          </MealCategoryDeleteTouchable>
        </MealCategoryDeleteView>
      </MealCategoryView>
    </MealCategoryTouchable>
  );
};

export default MealCategory;

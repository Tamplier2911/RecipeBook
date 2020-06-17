import React, { useContext } from "react";

// context
import AppStore from "../../contexts/GlobalContext";

// sc
import {
  MealDescriptionView,
  MealDescriptionTouchable,
  MealDescriptionWrap,
  MealDescriptionBackground,
  MealDescriptionTitleView,
  MealDescriptionTitleWrap,
  MealDescriptionTitle,
  MealDescriptionDataView,
  MealDescriptionDataWrap,
  MealDescriptionDataText,
} from "./MealDescription.styles";

const MealDescription = ({ meal, color, action, from }) => {
  const { theme, width } = useContext(AppStore);
  const { title, complexity, imageUrl, duration } = meal;

  return (
    <MealDescriptionTouchable onPress={action} activeOpacity={0.7}>
      <MealDescriptionView width={width} theme={theme}>
        <MealDescriptionBackground source={{ uri: imageUrl }}>
          <MealDescriptionWrap>
            <MealDescriptionTitleView>
              <MealDescriptionTitleWrap theme={theme} color={color}>
                <MealDescriptionTitle
                  theme={theme}
                  numberOfLines={1}
                  from={from}
                  color={color}
                >
                  {title}
                </MealDescriptionTitle>
              </MealDescriptionTitleWrap>
            </MealDescriptionTitleView>
            <MealDescriptionDataView>
              <MealDescriptionDataWrap theme={theme} color={color}>
                <MealDescriptionDataText
                  theme={theme}
                  from={from}
                  color={color}
                >
                  {duration}min
                </MealDescriptionDataText>
                <MealDescriptionDataText
                  theme={theme}
                  from={from}
                  color={color}
                >
                  {complexity}
                </MealDescriptionDataText>
              </MealDescriptionDataWrap>
            </MealDescriptionDataView>
          </MealDescriptionWrap>
        </MealDescriptionBackground>
      </MealDescriptionView>
    </MealDescriptionTouchable>
  );
};

export default MealDescription;

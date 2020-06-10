import React, { useContext } from "react";

// context
import AppStore from "../../contexts/GlobalContext";

// component
import Button from "../../components/Button/Button";

// component
import {
  MealsScreenView,
  MealsScreenTop,
  MealsScreenText,
  MealsScreenBot,
  MealsButtonView,
  MealsButtonSeparator,
} from "./MealsScreen.styles";

const MealsScreen = ({ navigation, route }) => {
  const { theme } = useContext(AppStore);
  const { navigate } = navigation;
  const {
    params: { title },
  } = route;
  return (
    <MealsScreenView theme={theme}>
      <MealsScreenTop>
        <MealsScreenText>{title}</MealsScreenText>
      </MealsScreenTop>
      {/* <MealsScreenBot>
        <MealsButtonView>
          <Button title={"back"} onPress={() => navigate("Categories")} />
        </MealsButtonView>
        <MealsButtonSeparator />
        <MealsButtonView>
          <Button
            title={"meal details"}
            onPress={() => navigate("MealDetails")}
          />
        </MealsButtonView>
      </MealsScreenBot> */}
    </MealsScreenView>
  );
};

export default MealsScreen;

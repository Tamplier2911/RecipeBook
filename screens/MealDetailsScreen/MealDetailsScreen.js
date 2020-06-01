import React, { useContext } from "react";

// context
import AppStore from "../../contexts/GlobalContext";

// component
import Button from "../../components/Button/Button";
// component
import {
  MealDetailsScreenView,
  MealDetailsScreenTop,
  MealDetailsScreenText,
  MealDetailsScreenBot,
  MealDetailsButtonView,
  MealDetailsButtonSeparator,
} from "./MealDetailsScreen.styles";

const MealDetailsScreen = ({ navigation }) => {
  const { theme } = useContext(AppStore);
  const { navigate } = navigation;
  return (
    <MealDetailsScreenView theme={theme}>
      <MealDetailsScreenTop>
        <MealDetailsScreenText>MealDetails Screen Top</MealDetailsScreenText>
      </MealDetailsScreenTop>
      <MealDetailsScreenBot>
        <MealDetailsButtonView>
          <Button title={"back"} onPress={() => navigate("Meals")} />
        </MealDetailsButtonView>
      </MealDetailsScreenBot>
    </MealDetailsScreenView>
  );
};

export default MealDetailsScreen;

import React from "react";

// components
import ThemeToggler from "../../components/ThemeToggler/ThemeToggler";
import AddRecipeButton from "../../components/AddRecipeButton/AddRecipeButton";

// sc
import { HeaderRightContainerView } from "./HeaderRightContainer.styles";

const HeaderRightContainer = () => (
  <HeaderRightContainerView>
    <AddRecipeButton />
    <ThemeToggler />
  </HeaderRightContainerView>
);

export default HeaderRightContainer;

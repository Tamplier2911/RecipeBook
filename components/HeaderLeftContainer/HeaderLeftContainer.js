import React from "react";

// components
import SideDrawerToggler from "../SideDrawerToggler/SideDrawerToggler";

// sc
import { HeaderLeftContainerView } from "./HeaderLeftContainer.styles";

const HeaderLeftContainer = ({ action }) => {
  return (
    <HeaderLeftContainerView>
      <SideDrawerToggler action={action} />
    </HeaderLeftContainerView>
  );
};
export default HeaderLeftContainer;

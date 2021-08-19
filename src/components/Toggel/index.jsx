import React from "react";
import { CheckBoxWrapper, ContainerToggle, ToggleLabel } from "./view";
function Toggel() {
  return (
    <>
      <CheckBoxWrapper>
        <ContainerToggle id="checkbox" type="checkbox" />
        <ToggleLabel htmlFor="checkbox" />
      </CheckBoxWrapper>
    </>
  );
}

export default Toggel;

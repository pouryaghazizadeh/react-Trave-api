import React from "react";
import { CheckBoxWrapper, ContainerToggel, ToggelLabel } from "./view";
function Toggel() {
  return (
    <>
      <CheckBoxWrapper>
        <ContainerToggel id="checkbox" type="checkbox" />
        <ToggelLabel htmlFor="checkbox" />
      </CheckBoxWrapper>
    </>
  );
}

export default Toggel;

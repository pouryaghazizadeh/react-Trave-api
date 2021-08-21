import React, { useState } from "react";
import Mood from "../Mood";
import { CheckBoxWrapper, ContainerToggle, ToggleLabel } from "./view";
function Toggel() {
  const [i, setI] = useState("");
  Mood(i);
  return (
    <>
      <CheckBoxWrapper>
        <ContainerToggle
          id="checkbox"
          type="checkbox"
          value={i}
          onChange={(e) => {
            setI(!i);
          }}
        />
        <ToggleLabel htmlFor="checkbox" />
      </CheckBoxWrapper>

      <div></div>
    </>
  );
}

export default Toggel;

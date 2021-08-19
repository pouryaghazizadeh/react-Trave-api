import React from "react";
import { CheckBoxWrapper, ContainerToggle, ToggleLabel } from "./view";
function Toggel() {
const [r,setR] = usestate(false)
  return (
    <>
      <CheckBoxWrapper>
        <ContainerToggle id="checkbox" type="checkbox" value = {r} onClick = {(e)=>{
          setR(e.target.value) 
          
        }} />
        <ToggleLabel htmlFor="checkbox" />
      </CheckBoxWrapper>

      <div style = {{

      }}>

      </div>
    </>
  );
}

export default Toggel;

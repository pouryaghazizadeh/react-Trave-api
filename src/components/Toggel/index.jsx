import React from "react";
import { CheckBoxWrapper, ContainerToggle, ToggleLabel } from "./view";
import {useState}from "react"
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
background: {r?red:black}

      }}>

      </div>
    </>
  );
}

export default Toggel;

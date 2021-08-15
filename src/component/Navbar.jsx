import React from "react";
import Toggle from "./Toggle";
function Navbar({ theme, toggleTheme }) {
  return (
    <div>
      <div style={{ width: " 100%", height: "88px", background: "red" }}>
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
}

export default Navbar;

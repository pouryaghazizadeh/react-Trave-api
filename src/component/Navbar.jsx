import React from "react";
import Toggle from "./Toggle";
function Navbar({ theme, toggleTheme }) {
  return (
    <div>
      <div>
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
}

export default Navbar;

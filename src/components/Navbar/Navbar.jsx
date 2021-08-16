import React from "react";
import Toggle from "../Toggle";
import { Nav } from "./Navbar";
function Head({ theme, toggleTheme }) {
  return (
    <div>
      <div className="divp">
        <Nav>
          <Toggle theme={theme} toggleTheme={toggleTheme} />
          <h2>fffffffff</h2>
        </Nav>
      </div>
    </div>
  );
}

export default Head;

import React from "react";

function Toggle({ toggleTheme }) {
  return (
    <div>
      <div>
        <button
          onClick={(e) => {
            toggleTheme();
          }}
        >
          click
        </button>
      </div>
    </div>
  );
}

export default Toggle;

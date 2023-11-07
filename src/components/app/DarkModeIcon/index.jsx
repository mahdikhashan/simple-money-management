import React from "react";

import useDarkMode from "@Hooks/useDarkMode";

function DarkModeIcon() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <img
      onClick={toggleDarkMode}
      src={
        darkMode
          ? require("../../../assets/icons/moon-white-regular.png")
          : require("../../../assets/icons/sun-white-filled-regular.png")
      }
      alt="dark-mode-icon"
    />
  );
}

export default DarkModeIcon;

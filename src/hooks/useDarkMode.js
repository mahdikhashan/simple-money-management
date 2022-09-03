import { useContext } from "react";
import { DarkModeContext } from "../contexts/theme";

const useDarkMode = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)

  return {
    darkMode,
    toggleDarkMode
  }
}

export default useDarkMode;
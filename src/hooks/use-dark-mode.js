import { useContext } from "react";
import { ThemeContext } from "../contexts/theme";

const useDarkMode = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext)

  return {
    darkMode,
    toggleDarkMode
  }
}

export default useDarkMode;
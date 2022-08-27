import {useContext} from "@types/react";
import {ThemeContext} from "../contexts/theme";

const useTheme = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext)

  return {
    darkMode,
    toggleDarkMode
  }
}

export default useTheme;
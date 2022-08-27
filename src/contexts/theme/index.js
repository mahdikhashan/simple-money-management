import React, { createContext, useState } from 'react'

const ThemeContext = createContext()

function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode)

  return (
    <>
      <ThemeContext.Provider value={{darkMode, toggleDarkMode}}>
        { children }
      </ThemeContext.Provider>
    </>
  )
}

export { ThemeContext, ThemeProvider };

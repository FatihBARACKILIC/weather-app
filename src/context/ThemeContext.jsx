import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "dark")

  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])

  const values = {
    theme,
    setTheme,
  }

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  )
}

const useThemeContext = () => useContext(ThemeContext)

export default ThemeContext
export { ThemeProvider, useThemeContext }

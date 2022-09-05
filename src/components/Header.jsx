import React from "react"
import { useThemeContext } from "../context/ThemeContext"
import { BsSun } from "react-icons/bs"
import { MdModeNight } from "react-icons/md"

const Header = () => {
  const { theme, setTheme } = useThemeContext()

  return (
    <>
      <h1>Header</h1>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? <BsSun /> : <MdModeNight />}
      </button>
    </>
  )
}

export default Header

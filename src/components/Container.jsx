import { useThemeContext } from "../context/ThemeContext"
import { useWeatherContext } from "../context/WeatherContext"
import Footer from "./Footer"
import Header from "./Header"
import Weather from "./Weather"

const Container = () => {
  const { weather } = useWeatherContext()
  const { theme } = useThemeContext()

  return (
    <div id={theme} className="container">
      <Header />
      <hr />
      {["daily"] in weather && <Weather />}
      <Footer />
    </div>
  )
}

export default Container

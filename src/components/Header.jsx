import { useFormik } from "formik"
import { BsSunFill } from "react-icons/bs"
import { MdModeNight } from "react-icons/md"
import { useThemeContext } from "../context/ThemeContext"
import { useWeatherContext } from "../context/WeatherContext"

const Header = () => {
  const { theme, setTheme } = useThemeContext()
  const { cityName, setCityName, weather, setWeather } = useWeatherContext()

  const { handleSubmit, handleChange, handleBlur, values } = useFormik({
    initialValues: {
      cityNameForm: cityName,
    },
    onSubmit: (values) => {
      setCityName(values.cityNameForm)
    },
  })

  return (
    <div id="header">
      <h1>Weather App</h1>
      <nav>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="cityNameForm"
            id="city-name-form"
            onChange={handleChange}
            value={values.cityNameForm}
            placeholder="Write City Name"
          />
        </form>
        <div
          className="theme-button"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <BsSunFill /> : <MdModeNight />}
        </div>
      </nav>
    </div>
  )
}

export default Header

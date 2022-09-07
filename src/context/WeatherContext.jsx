import axios from "axios"
import { createContext, useContext, useEffect, useState } from "react"
import "./../Style.css"

const WeatherContext = createContext()

const WeatherProvider = ({ children }) => {
  const [cityName, setCityName] = useState("Istanbul")
  const [weather, setWeather] = useState({})

  useEffect(() => {
    if (cityName.length > 0) {
      const key = import.meta.env.VITE_API_KEY
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},tr&units=metric&appid=${key}`

      const getWeather = ({ lon, lat }) => {
        const mapUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=metric&appid=${key}`
        let weatherData = {}
        axios(mapUrl)
          .then((result) => setWeather(result.data))
          .catch((err) => console.error(err))
        return weatherData
      }

      axios(url)
        .then((result) => {
          return result.data.coord
        })
        .then((result) => getWeather(result))
        .catch((err) => console.error(err))
    }
  }, [cityName])

  // useEffect(() => {
  //   console.log(weather)
  // }, [weather])

  const values = {
    cityName,
    setCityName,
    weather,
    setWeather,
  }

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  )
}

const useWeatherContext = () => useContext(WeatherContext)

export default WeatherContext
export { WeatherProvider, useWeatherContext }

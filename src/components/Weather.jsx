import { useState } from "react"
import { useWeatherContext } from "../context/WeatherContext"
import Icons from "./Icons"

const Weather = () => {
  const { cityName, weather } = useWeatherContext()
  const [mainWeather, setMainWeather] = useState(0)
  const [day, setDay] = useState("Today")

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]

  const date = new Date()

  return (
    <section>
      <h2>{cityName}'s Weather</h2>
      <div className="weather-container">
        <div id="big-weather">
          <h3>{day}</h3>
          <div className="bigIcon">
            <Icons icon={weather.daily[mainWeather].weather[0].icon} />
          </div>
          <span>{weather.daily[mainWeather].weather[0].main}</span>
          <span>{Math.floor(weather.daily[mainWeather].temp.day)}°C</span>
          <span>
            {Math.floor(weather.daily[mainWeather].temp.min)}°C /{" "}
            {Math.floor(weather.daily[mainWeather].temp.max)}°C
          </span>
        </div>

        <div id="days">
          {weather.daily.map((item, index) => (
            <div
              className="day"
              key={index}
              onClick={() => {
                setMainWeather(`${index}`)
                setDay(
                  index === 0 ? "Today" : days[(date.getDay() + index) % 7]
                )
              }}
            >
              <span>
                {index === 0 ? "Today" : days[(date.getDay() + index) % 7]}
              </span>
              <div className="icon">
                <Icons icon={item.weather[0].icon} />
              </div>
              <span>{item.weather[0].main}</span>
              <span>{Math.floor(item.temp.day)}°C</span>
              <span>
                {Math.floor(item.temp.min)}°C / {Math.floor(item.temp.max)}°C
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Weather

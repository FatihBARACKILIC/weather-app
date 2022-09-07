import Container from "./components/Container"
import { ThemeProvider } from "./context/ThemeContext"
import { WeatherProvider } from "./context/WeatherContext"

function App() {
  return (
    <ThemeProvider>
      <WeatherProvider>
        <Container />
      </WeatherProvider>
    </ThemeProvider>
  )
}

export default App

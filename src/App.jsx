import Header from "./components/Header"
import { ThemeProvider } from "./context/ThemeContext"

function App() {
  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  )
}

export default App

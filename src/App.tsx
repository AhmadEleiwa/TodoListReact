import "./App.css";
import HomePage from "./pages/home";

import { ThemeProvider } from "./contexts/Theme";
function App() {
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;

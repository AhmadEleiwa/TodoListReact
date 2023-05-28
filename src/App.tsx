import "./App.css";
import HomePage from "./pages/home";
import React, { FC } from "react";
import { ThemeProvider } from "./contexts/Theme";
const App: FC = () => {
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  );
};

export default App;

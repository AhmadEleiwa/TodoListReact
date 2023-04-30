import logo from './logo.svg';
import './App.css';
import HomePage from './pages/home';
import Theme, { lightMode, darkMode } from './utils/Theme';

import { useCallback, useContext, useState } from 'react';
function App() {
  const [mode, setMode] = useState('light')

  const siwtchHandler = () => {
    setMode(mode === 'light' ? 'dark':'light')
  }

  return (
    <Theme.Provider value={{
      mode: mode,
      pallete: mode === 'light' ? lightMode : darkMode,
      switchHandler:siwtchHandler
    }}>
      <HomePage />
    </Theme.Provider>
  );
}

export default App;

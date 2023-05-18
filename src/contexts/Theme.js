import { createContext, useContext, useState } from "react";

export const darkMode = {
  paper: "#095B83",
  dark: "#095B83",
  light: "#BBE7FC",
  main: "#11A8E6",
  disabled: "#3E5663",
  buttonDisabled: "#818181",
  paperBorder: "white",
  textPrimary: "#fafafafa",
  textSecondary: "#afafaf",
  backgroundPaper: "#1F3A47",
  dropShadow: "#33333360",
};
export const lightMode = {
  paper: "white",
  dark: "#095B83",
  light: "#BBE7FC",
  main: "#11A8E6",
  disabled: "#E3E3E380",
  buttonDisabled: "#818181",
  paperBorder: "#11A8E6",
  textPrimary: "#121212",
  textSecondary: "#4f4f4f",
  backgroundPaper: "#F5F5F5",
  dropShadow: "#66666640",
};
const Theme = createContext({
  mode: "light",
  switchHandler: () => {},
  pallete: lightMode,
});

export const useTheme = () => useContext(Theme)

export const ThemeProvider = (props) => {
  const [mode, setMode] = useState(false);
  return (
    <Theme.Provider
      value={{
        mode: mode,
        switchHandler: () => {
          setMode((p) => !p);
        },
        pallete: mode ? lightMode : darkMode,
      }}
    >
      {props.children}
    </Theme.Provider>
  );
};

export default Theme;

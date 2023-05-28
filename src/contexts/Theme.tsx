import React, { PropsWithChildren, createContext, useContext, useState, FC} from "react";

type Pallete = {
  paper:string,
  dark:string,
  light:string, 
  main:string,
  disabled: string,
  buttonDisabled:string,
  paperBorder:string,
  textPrimary:string,
  textSecondary:string,
  backgroundPaper:string,
  dropShadow:string
  
}
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

type ThemeData = {
  mode:boolean,
  switchHandler: () => void,
  pallete: Pallete,
}
const Theme = createContext<ThemeData>({
  mode: true,
  switchHandler: () => {},
  pallete: lightMode,
});

export const useTheme = () => useContext(Theme)

export const ThemeProvider:FC<PropsWithChildren>= ({children}) => {
  const [mode, setMode] = useState<boolean>(false);
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
      {children}
    </Theme.Provider>
  );
};

export default Theme;

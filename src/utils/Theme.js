import { createContext } from "react";


export const darkMode ={
    paper:'#095B83',
    dark:'#095B83',
    light:"#BBE7FC",
    main:'#11A8E6',
    disabled:'#3E5663',
    buttonDisabled:'#818181',
    paperBorder:'white',
    textPrimary: '#fafafafa',
    textSecondary: '#afafaf',

}
export const lightMode ={
    paper:'white',
    dark:'#095B83',
    light:"#BBE7FC",
    main:'#11A8E6',
    disabled:'#E3E3E380',
    buttonDisabled:'#818181',
    paperBorder:'#11A8E6',
    textPrimary: '#121212',
    textSecondary: '#4f4f4f',
}
const Theme = createContext({
    mode:'light',
    switchHandler:()=>{console.log(11)},
    pallete: lightMode
    
})

export default Theme
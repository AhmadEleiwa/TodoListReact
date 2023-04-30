import { createContext } from "react";


const darkMode ={
    paper:'#095B83',
    dark:'#095B83',
    light:"#BBE7FC",
    main:'#11A8E6',
    disabled:'#3E5663',
    buttonDisabled:'#818181'
}
const lightMode ={
    paper:'white',
    dark:'#095B83',
    light:"#BBE7FC",
    main:'#11A8E6',
    disabled:'#E3E3E380'
}
const Theme = createContext({
    mode:'light',
    pallete: lightMode
    
})

export default Theme
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext, useState } from "react"
import Theme from "../../../utils/Theme"

import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

import './style.css'
const Siwtch = props =>{
    const [switchMode, setSwitchMode] = useState(false)
    const theme = useContext(Theme)

    const siwtchHandler = e =>{
        theme.switchHandler()
        setSwitchMode(!switchMode)
    }


    return <div className="switch" onClick={siwtchHandler} style={{backgroundColor:theme.pallete.disabled}}>
        <div className="thumb" style={{left:switchMode ? '50%' :'0', backgroundColor:theme.pallete.main}}></div>
        <FontAwesomeIcon className="icon" icon={faSun} color='white'  />
        <FontAwesomeIcon className="icon" icon={faMoon} color='white'  />
    </div>
}


export default Siwtch
import Button from "../Button"
import Logo from "./Logo"
import Siwtch from "./Switch"
import './style.css'
import {useState } from "react"


import Model from "../Model"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAdd } from "@fortawesome/free-solid-svg-icons"
import { useTheme } from "../../contexts/Theme"
const Header =props=>{
    const {pallete} = useTheme()
  

    const [modelOpen ,setModelOpen] = useState(false)



    return <header className="header" style={{
        backgroundColor:pallete.paper,
        boxShadow:`0 2px 8px 0 ${pallete.dropShadow}`
        }}>
        <Siwtch />
        <Logo />
        <Button className='btn-desktop' onClick={()=>{setModelOpen(true)}}  >ADD NEW TASK</Button>
        <FontAwesomeIcon className="btn-mobile" color={pallete.main}  onClick={()=>{setModelOpen(true)}}   icon={faAdd} />
        <Model isOpen={modelOpen} onClose={()=>{setModelOpen(false)}} />
    </header>
}
export default Header
import Button from "../Button"
import Logo from "./Logo"
import Siwtch from "./Switch"
import './style.css'
import { useContext, useState } from "react"
import Theme from "../../utils/Theme"


import Model from "../Model"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAdd } from "@fortawesome/free-solid-svg-icons"
const Header =props=>{
    const theme = useContext(Theme)
  

    const [modelOpen ,setModelOpen] = useState(false)



    return <header className="header" style={{
        backgroundColor:theme.pallete.paper,
        boxShadow:`0 2px 8px 0 ${theme.pallete.dropShadow}`
        }}>
        <Siwtch />
        <Logo />
        <Button className='btn-desktop' onClick={()=>{setModelOpen(true)}}  >ADD NEW TASK</Button>
        <FontAwesomeIcon className="btn-mobile" color={theme.pallete.main}  onClick={()=>{setModelOpen(true)}}   icon={faAdd} />
        <Model isOpen={modelOpen} onClose={()=>{setModelOpen(false)}} />
    </header>
}
export default Header
import Button from "../Button"
import Logo from "./Logo"
import Siwtch from "./Switch"
import './style.css'
import { useContext, useState } from "react"
import Theme from "../../utils/Theme"


import Model from "../Model"
const Header =props=>{
    const theme = useContext(Theme)
  

    const [modelOpen ,setModelOpen] = useState(false)



    return <header className="header" style={{
        backgroundColor:theme.pallete.paper,
        boxShadow:`0 2px 8px 0 ${theme.pallete.dropShadow}`
        }}>
        <Siwtch />
        <Logo />
        <Button onClick={()=>{setModelOpen(true)}} >ADD NEW TASK</Button>
        <Model isOpen={modelOpen} onClose={()=>{setModelOpen(false)}} />
    </header>
}
export default Header
import Button from "../Button"
import Logo from "./Logo"
import Siwtch from "./Switch"
import './style.css'
import { useContext } from "react"
import Theme from "../../utils/Theme"
const Header =props=>{
    const theme = useContext(Theme)

    const addTaskHandler = event =>{
        // some logic here

    }

    return <header className="header" style={{
        backgroundColor:theme.pallete.paper,
        boxShadow:`0 2px 8px 0 ${theme.pallete.dropShadow}`
        }}>
        <Siwtch />
        <Logo />
        <Button onClick={addTaskHandler} >ADD NEW TASK</Button>
    </header>
}
export default Header
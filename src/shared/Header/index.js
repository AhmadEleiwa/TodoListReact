import Button from "../Button"
import Logo from "./Logo"
import Siwtch from "./Switch"
import './style.css'
import { useContext } from "react"
import Theme from "../../utils/Theme"
import DataContext from "../../utils/localStorageUtils"
import uuid from 'react-uuid';
const Header =props=>{
    const theme = useContext(Theme)
    const dataContext = useContext(DataContext)

    const addTaskHandler = event =>{
        // some logic here
        dataContext.changeHandler([...dataContext.data, {id:uuid(), value:'test', assignee:'ahmad', state:false}])
        dataContext.statHandler({
            ...dataContext.stastics, 
            all:dataContext.stastics.all +1,
            pending:dataContext.stastics.pending + 1
        })
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
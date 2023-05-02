import { useContext } from "react"
import Theme from "../../utils/Theme"

import './style.css'

const Container = props =>{
    const theme = useContext(Theme)
    return <div className="container" style={{background:theme.pallete.backgroundPaper, height:'100vh'}}>
        {props.children}
    </div>
}


export default Container
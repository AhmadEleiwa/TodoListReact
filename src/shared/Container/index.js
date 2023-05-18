
import './style.css'
import { useTheme } from "../../contexts/Theme"

const Container = props =>{
    const theme = useTheme()
    return <div className="container" style={{background:theme.pallete.backgroundPaper, height:'100vh'}}>
        {props.children}
    </div>
}


export default Container
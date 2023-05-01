import { useContext } from "react"
import Theme from "../../utils/Theme"

const Container = props =>{
    const theme = useContext(Theme)
    return <div style={{background:theme.pallete.backgroundPaper, height:'100vh'}}>
        {props.children}
    </div>
}


export default Container
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {faT} from '@fortawesome/free-solid-svg-icons'
import { useTheme } from "../../../contexts/Theme"

const Logo = props =>{
    const theme = useTheme()
    return <div style={{display:'flex', alignItems:'center', gap:'0.2em '}}>
        <FontAwesomeIcon icon={faT} color={theme.pallete.main} fontSize={'2em'} />
        <p style={{fontSize:'2em', color:theme.pallete.textPrimary}} >odos</p>
    </div>
}
export default Logo
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {faT} from '@fortawesome/free-solid-svg-icons'

const Logo = props =>{
    return <div style={{display:'flex', alignItems:'center', gap:'0.2em '}}>
        <FontAwesomeIcon icon={faT} color='white' fontSize={'2em'} />
        <p style={{fontSize:'2em', color:'white'}} >odos</p>
    </div>
}
export default Logo
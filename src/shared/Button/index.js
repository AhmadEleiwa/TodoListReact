import { useContext } from 'react'
import Theme from '../../utils/Theme'
import './style.css'
const Button = props => {
    const theme = useContext(Theme)
    return <button className={`btn ${props.className}`} onClick={props.onClick} style={{ boxShadow: `0 2px 8px 0 ${theme.pallete.dropShadow}` }}>
        {props.children}
    </button>
}

export default Button
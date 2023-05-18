import './style.css'
import { useTheme } from '../../contexts/Theme'
const Button = props => {
    const theme =useTheme()
    return <button className={`btn ${props.className}`} onClick={props.onClick} style={{ boxShadow: `0 2px 8px 0 ${theme.pallete.dropShadow}` }}>
        {props.children}
    </button>
}

export default Button
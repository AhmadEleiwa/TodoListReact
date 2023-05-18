import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './style.css'
import { useTheme } from "../../contexts/Theme"

const TitledCard = props =>{
    const theme = useTheme()

    return <div className="titled-card" style={{
        background:`linear-gradient(281.77deg, ${theme.pallete.light}  32.97%,  ${theme.pallete.dark} 92.16%)`,
        boxShadow: `0 2px 8px 0 ${theme.pallete.dropShadow}`
        }} >
        <h2>{props.title}</h2>
        <p className="no">{props.value}</p>
        <FontAwesomeIcon className="icon" icon={props.icon} fontSize='10em' color={theme.pallete.dark} /> 

    </div>
}

export default TitledCard
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react"
import Theme from "../../utils/Theme"
import './style.css'

const TitledCard = props =>{
    const theme = useContext(Theme)

    return <div className="titled-card" style={{background:`linear-gradient(281.77deg, ${theme.pallete.light}  32.97%,  ${theme.pallete.dark} 92.16%)`}} >
        <h2>{props.title}</h2>
        <p className="no">{props.value}</p>
        <FontAwesomeIcon className="icon" icon={props.icon} fontSize='10em' color={theme.pallete.dark} /> 

    </div>
}

export default TitledCard
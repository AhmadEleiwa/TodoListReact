import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome"
import './style.css'
import { useTheme } from "../../contexts/Theme"
import React, {FC} from "react"
import { IconProp } from "@fortawesome/fontawesome-svg-core"

type Props= {
    title:string,
    value:number,
    icon:IconProp,
}
const TitledCard:FC<Props>= ({title,value,icon}) =>{
    const theme = useTheme()

    return <div className="titled-card" style={{
        background:`linear-gradient(281.77deg, ${theme.pallete.light}  32.97%,  ${theme.pallete.dark} 92.16%)`,
        boxShadow: `0 2px 8px 0 ${theme.pallete.dropShadow}`
        }} >
        <h2>{title}</h2>
        <p className="no">{value}</p>
        <FontAwesomeIcon className="icon" icon={icon} fontSize='10em' color={theme.pallete.dark} /> 

    </div>
}

export default TitledCard
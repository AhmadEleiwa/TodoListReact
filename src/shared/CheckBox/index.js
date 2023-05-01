import './style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'


import { useContext, useState } from 'react'
import Theme from '../../utils/Theme'
const CheckBox = props => {
    const [isChecked, setIsChecked] = useState(false)

    const theme = useContext(Theme)

    const clickHandler = () =>{
        setIsChecked(!isChecked)
        if(props.onClick)
            props.onClick() 
    }
    return <>
        {isChecked ? <FontAwesomeIcon onClick={clickHandler} fontWeight={'100%'}  icon={faCheckCircle} color={theme.pallete.main} fontSize={'32px'} />
        :<FontAwesomeIcon onClick={clickHandler}  className='empty-cricle' style={{borderColor:theme.pallete.textSecondary}} fontWeight={'100%'}  icon={faCheckCircle} color='transparent' fontSize={'32px'} />
        }
    </>

}

export default CheckBox
import './style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'


import { useState } from 'react'
const CheckBox = props => {
    const [isChecked, setIsChecked] = useState(false)
    const clickHandler = () =>{
        setIsChecked(!isChecked)
        if(props.onClick)
            props.onClick() 
    }
    return <>
        {isChecked ? <FontAwesomeIcon onClick={clickHandler} fontWeight={'100%'}  icon={faCheckCircle} color='#11A8E6' fontSize={'32px'} />
        :<FontAwesomeIcon onClick={clickHandler}  className='empty-cricle' fontWeight={'100%'}  icon={faCheckCircle} color='transparent' fontSize={'31px'} />
        }
    </>

}

export default CheckBox
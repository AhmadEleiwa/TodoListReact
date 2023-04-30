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
        {isChecked == true ?
            <FontAwesomeIcon onClick={clickHandler}  icon={faCheckCircle} color='#11A8E6' fontSize={'2em'} />
            : <div onClick={clickHandler}  className='empty-cricle' />
        }
    </>

}

export default CheckBox
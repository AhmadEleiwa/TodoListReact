import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import { useContext, useState } from 'react'
import CheckBox from '../CheckBox'
import './style.css'
import Theme from '../../utils/Theme'


const TaskCard = props => {
    const [inputData, setInputData] = useState(props.value)
    const [inputEnable, setInputEnable] = useState(props.inputEnable)
    const theme = useContext(Theme)

    const deleteTaskHandler = () => {
        // delete task logic
    }


    return <div className='task-card'
        style={{
            backgroundColor: theme.paper
        }}>
        <CheckBox />
        <div className='task-body' >
            <input style={{ color: theme.pallete.main }} onChange={(e) => { setInputData(e.target.value) }} disabled={inputEnable} value={inputData} />
            <p>{props.assignee}</p>
        </div>
        <FontAwesomeIcon onClick={() => { setInputEnable(!inputEnable) }}  icon={faEdit} color={inputEnable ? theme.pallete.main: theme.pallete.buttonDisabled} />
        <FontAwesomeIcon icon={faTrash} color={'red'} />
    </div>
}

export default TaskCard
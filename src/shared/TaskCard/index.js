import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import { useContext, useState } from 'react'
import CheckBox from '../CheckBox'
import './style.css'
import Theme from '../../utils/Theme'


const TaskCard = props => {
    const [inputData, setInputData] = useState(props.value)
    const [taskEnable, setTaskEnable] = useState(props.taskEnable)
    
    const theme = useContext(Theme)

    const deleteTaskHandler = () => {
        // delete task logic
    }
    const editTask = (e) => {
        setInputData(e.target.value)
        

    }

    const enableEdit = () => {
        if (taskEnable !== true){
            props.setIndexHandler(props.index)
        }
    }
    
    const taskCheckHandler = () => {
        props.setIndexHandler(-1)
        setTaskEnable(!taskEnable)
    }

    return <div className='task-card'
        style={{
            backgroundColor: taskEnable ? theme.pallete.disabled : theme.pallete.paper
        }}>
        <CheckBox onClick={ taskCheckHandler} checked={taskEnable} />
        <div className='task-body' >
            <input style={{ color: theme.pallete.main , border:`1px solid ${theme.pallete.paperBorder}`}} onChange={editTask} disabled={props.inputEnable} value={inputData} />
            <p style={{color:theme.pallete.textSecondary}}>{props.assignee}</p>
        </div>
        <div className='control'>
            <FontAwesomeIcon icon={faEdit} onClick={enableEdit} color={!taskEnable ? theme.pallete.main : theme.pallete.buttonDisabled} />
            <FontAwesomeIcon icon={faTrash} color={'red'} />
        </div>
    </div>
}

export default TaskCard
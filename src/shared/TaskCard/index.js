import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import { useContext, useState } from 'react'
import CheckBox from '../CheckBox'
import Theme from '../../utils/Theme'
import DataContext from '../../utils/localStorageUtils'
import Model from '../Model'

import './style.css'

const TaskCard = props => {
    const [inputData, setInputData] = useState(props.value)
    const [modelOpen, setModelOpen] = useState(false)


    const theme = useContext(Theme)
    const dataContext = useContext(DataContext)


    const deleteTaskHandler = () => {
        const data = dataContext.data.filter(p => p.id !== props.id)
        const state = dataContext.data.find(p => p.id === props.id).state
        dataContext.changeHandler(data)
        if (state)
            dataContext.statHandler({
                ...dataContext.stastics,
                all: data.length,
                done: dataContext.stastics.done - 1,
                deleted: dataContext.stastics.deleted + 1
            })
        else
            dataContext.statHandler({
                ...dataContext.stastics,
                all: data.length,
                pending: dataContext.stastics.pending - 1,
                deleted: dataContext.stastics.deleted + 1
            })
    }
    const editTask = (e) => {
        setInputData(e.target.value)
        const i = dataContext.data.findIndex(p => p.id === props.id)
        dataContext.data[i].value = e.target.value
        dataContext.changeHandler(dataContext.data)

    }

    const enableEdit = () => {
        if (props.taskEnable !== true) {
            props.setIndexHandler(props.id)
        }
    }

    const taskCheckHandler = () => {
        props.setIndexHandler(-1)
        const i = dataContext.data.findIndex(p => p.id === props.id)
        dataContext.data[i].state = !props.taskEnable
        dataContext.changeHandler(dataContext.data)
        if (!props.taskEnable)
            dataContext.statHandler({
                ...dataContext.stastics,
                done: dataContext.stastics.done + 1,
                pending: dataContext.stastics.pending - 1,

            })
        else
            dataContext.statHandler({
                ...dataContext.stastics,
                done: dataContext.stastics.done - 1,
                pending: dataContext.stastics.pending + 1,

            })
    }

    return <div className='task-card'
        style={{
            backgroundColor: props.taskEnable ? theme.pallete.disabled : theme.pallete.paper,
            boxShadow: `0 2px 8px 0 ${theme.pallete.dropShadow}`
        }}>

        <CheckBox onClick={taskCheckHandler} checked={props.taskEnable} />
        <div className='task-body' >
            <input style={{
                color: theme.pallete.main,
                border: `1px solid ${theme.pallete.paperBorder}`,
                textDecoration: props.taskEnable ? "line-through" : "none"
            }}
                onChange={editTask} disabled={props.inputEnable}
                value={inputData} />
            <p style={{ color: theme.pallete.textSecondary }}>{props.assignee}</p>
        </div>
        <div className='control'>
            <FontAwesomeIcon
                icon={faEdit}
                onClick={enableEdit}
                color={!props.taskEnable ? theme.pallete.main : theme.pallete.buttonDisabled} />
            <FontAwesomeIcon
                onClick={() => { setModelOpen(true) }}
                icon={faTrash}
                color={'red'} />
        </div>
        <Model isOpen={modelOpen} conformModel submitHandler={deleteTaskHandler} onClose={() => { setModelOpen(false) }} />

    </div>
}

export default TaskCard
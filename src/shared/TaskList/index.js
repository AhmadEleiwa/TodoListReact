import { useContext, useState } from "react"
import DataContext from "../../utils/localStorageUtils"
import TaskCard from "../TaskCard"

import './style.css'

const TaskList = props => {
    const [indexItem, setIndexItem] = useState(-1)

    const setIndexHandler = (index) => {
        if (indexItem !== index)
            setIndexItem(index)
        else
            setIndexItem(-1)
    }
    const dataContext = useContext(DataContext)

    return <div className="task-list">
        {dataContext.data.map((item, index) => <TaskCard
            key={index}
            setIndexHandler={setIndexHandler}
            id={item.id}
            value={item.value}
            assignee={item.assignee}
            taskEnable={item.state}
            inputEnable={item.id !== indexItem}
        />)
        }

    </div>
}

export default TaskList
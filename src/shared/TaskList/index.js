import { useContext, useEffect, useState } from "react"
import DataContext from "../../utils/localStorageUtils"
import Theme from "../../utils/Theme"
import TaskCard from "../TaskCard"

import './style.css'

const TaskList = props => {
    const [indexItem, setIndexItem] = useState(-1)
    const [groupByAssigneeItems, setGroupByAssingeeItems] = useState(null)

    const setIndexHandler = (index) => {
        if (indexItem !== index)
            setIndexItem(index)
        else
            setIndexItem(-1)
    }
    const dataContext = useContext(DataContext)
    const theme = useContext(Theme)



    useEffect(() => {
        let data = [...dataContext.data]
        let ls = {}
        for (let item of data) {
            if (ls[item.assignee] === undefined)
                ls[item.assignee] = [item]
            else
                ls[item.assignee].push(item)
        }
        setGroupByAssingeeItems(Object.entries(ls))

    }, [props.groupByAssignee, dataContext.data])

    return <>
        {
            !props.groupByAssignee ?
                <div className="task-list">
                    {dataContext.data.map((item, index) => <TaskCard
                        key={item.id}
                        setIndexHandler={setIndexHandler}
                        id={item.id}
                        value={item.value}
                        assignee={item.assignee}
                        taskEnable={item.state}
                        inputEnable={item.id !== indexItem}
                    />)
                    }
                </div>
                : groupByAssigneeItems.map(p => <div key={p[0]} style={{marginTop:'1em'}} >
                    <div style={{display:'flex',marginBottom:'2em', flexDirection:'column', gap:'1em'}} >
                        {p[1].map((item, index) => <TaskCard
                            key={item.id}
                            setIndexHandler={setIndexHandler}
                            id={item.id}
                            value={item.value}
                            assignee={item.assignee}
                            taskEnable={item.state}
                            inputEnable={item.id !== indexItem}
                        />)
                        }
                    </div>
                    <hr color={theme.pallete.paperBorder} />
                </ div>)
        }
    </>
}

export default TaskList
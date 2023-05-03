
import { useState } from "react"
import Header from "../shared/Header"
import TaskList from "../shared/TaskList"
import { load, store } from "../utils/localStorageUtils"

import DataContext from '../utils/localStorageUtils'
import Container from "../shared/Container"
import ControlButtons from "../shared/ControlButtons"
import Statsics from "../shared/Statisics"
import SearchField from "../shared/SearchField"
import './style.css'
const HomePage = props => {
    const [dataLocal, setDataLocal] = useState(load('data'))
    const [stat, setStat] = useState(load('stat'))
    const [allowGroupByAssigne, setAllowGroupByAssignee] = useState(false)

    const statHandler = (st) => {
        setStat(st)

        store('stat', st)
    }
    const dataHandler = (data) => {
        // setState
        setDataLocal([...data])


        // store into localStorage
        store('data', data)

    }
    const dataHandlerLocal = (data) => {
        // setState
        setDataLocal([...data])

    }



    return <DataContext.Provider value={{
        data: dataLocal?dataLocal:[],
        stastics: stat ? stat : { all: 0, done: 0, pending: 0, deleted: 0 },
        changeHandlerLocal: dataHandlerLocal,
        statHandler: statHandler,
        changeHandler: dataHandler
    }}>
        <Header />
        <Container>
            <div className="box">
                <Statsics />
                <div className="body">
                    <SearchField />
                    <ControlButtons groupByAssignee={()=>setAllowGroupByAssignee((prev) => !prev)} />
                    <TaskList groupByAssignee={allowGroupByAssigne} />
                </div>
            </div>
        </Container>

    </ DataContext.Provider>
}

export default HomePage
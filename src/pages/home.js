
import { useState } from "react"
import Header from "../shared/Header"
import TaskList from "../shared/TaskList"
import { load, store } from "../utils/localStorageUtils"

import DataContext from '../utils/localStorageUtils'
import Container from "../shared/Container"
import ControlButtons from "../shared/ControlButtons"
import Statsics from "../shared/Statisics"
import SearchField from "../shared/SearchField"

const HomePage = props => {
    const [dataLocal, setDataLocal] = useState(load('data'))
    const [stat, setStat] = useState(load('stat'))

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
        data: dataLocal,
        stastics: stat ? stat : { all: 0, done: 0, pending: 0, deleted: 0 },
        changeHandlerLocal: dataHandlerLocal,
        statHandler: statHandler,
        changeHandler: dataHandler
    }}>
        <Header />
        <Container>
            <div style={{ width: '90%',display:'flex', margin:'0 auto' , gap:'1em', justifyContent:'center'}}>
                <Statsics />
                <div style={{width:'80%'}}>
                    <SearchField />
                    <ControlButtons />
                    <TaskList />
                </div>
            </div>
        </Container>

    </ DataContext.Provider>
}

export default HomePage

import {useState } from "react"
import Header from "../shared/Header"
import TaskList from "../shared/TaskList"
import { load, store } from "../utils/localStorageUtils"

import DataContext from '../utils/localStorageUtils'
const HomePage = props =>{
    const [dataLocal, setDataLocal] = useState(load('data'))

    const dataHandler = (data) => {
        // setState
        setDataLocal(data)
   
        // store into localStorage
        store('data', data)
    }
    return <DataContext.Provider value={{
        data: dataLocal? dataLocal : [], 
        changeHandler:dataHandler
    }}>
     <Header />
     <TaskList  />

    </ DataContext.Provider>
}

export default HomePage
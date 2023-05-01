import { useContext } from 'react'
import DataContext from '../../utils/localStorageUtils'
import Button from '../Button'

import './style.css'

const ControlButtons = props => {

    const dataContext = useContext(DataContext)

    const markAllHandler = () =>{
        let data = [...dataContext.data]
        data = data.map((i) => {
            return {...i , state:true}
        })
        dataContext.changeHandler(data)
   
        dataContext.statHandler({...dataContext.stastics ,all:data.length,done:data.length, pending:0})
    }

    const marAsUndone = () =>{
        let data = [...dataContext.data]
        data = data.map((i) => {
            return {...i , state:false}
        })
        dataContext.changeHandler(data)

        dataContext.statHandler({...dataContext.stastics ,all:data.length,pending:data.length, done:0})

    }

    const clearDoneTask = () =>{
        let data = [...dataContext.data]
        const ln = data.length
        data = data.filter((i) => i.state === false)
        dataContext.changeHandler(data)

        dataContext.statHandler({all:data.length,pending:data.length, done:0, deleted: dataContext.stastics.deleted +  (ln - data.length) })
    }
    const clearAll = () =>{
        dataContext.statHandler({all:0,done:0,pending:0, deleted:dataContext.stastics.deleted + dataContext.data.length })
        dataContext.changeHandler([])
        
    }

    return <div className='control-buttons'>
        <Button onClick={markAllHandler}>Mark All as Done</Button>
        <Button onClick={marAsUndone}>Mark All as Un-Done</Button>
        <Button onClick={clearDoneTask} >Clear Done Tasks</Button>
        <Button onClick={clearAll}>Clear All Tasks</Button>
        <Button>Group By Assignee</Button>
    </div>
}


export default ControlButtons
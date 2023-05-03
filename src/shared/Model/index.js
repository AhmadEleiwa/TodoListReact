import { useContext, useState } from 'react'
import DataContext from '../../utils/localStorageUtils'
import Theme from '../../utils/Theme'
import Button from '../Button'
import uuid from 'react-uuid';
import './style.css'

const Model = props => {
    const [inputData , setInputData] = useState({value:'', assignee:''});

    const theme = useContext(Theme)
    const dataContext = useContext(DataContext)

    const inputHandler = (event) =>{
        const key = event.target.name
        setInputData({...inputData, [key]:event.target.value})
        
    }

    const submitHandler = event =>{
        event.preventDefault()
        dataContext.changeHandler([...dataContext.data, {id:uuid(), value:inputData.value, assignee:inputData.assignee, state:false}])
        dataContext.statHandler({
            ...dataContext.stastics, 
            all:dataContext.stastics.all +1,
            pending:dataContext.stastics.pending + 1
        })

        props.onClose()
    }
    return <>
        {props.isOpen && <div className='black-drop' onClick={props.onClose}></div>}
        {props.isOpen && <div className='model' style={{
            backgroundColor:theme.pallete.backgroundPaper,
            boxShadow:`0px 2px 8px 0 ${theme.pallete.dropShadow}`
        }}>
            {props.conformModel
            ? <form onSubmit={(e)=>{
                e.preventDefault(); 
                props.submitHandler();
                props.onClose()
                }}>
                <p>{props.title}</p>
                <Button >CONFORM</Button>
                <Button onClick={props.onClose}>CANCLE</Button>
            </form>
            : <form onSubmit={submitHandler}>
                <input name='value' onInput={inputHandler} required placeholder='TASK' style={{color:theme.pallete.textPrimary}} />
                <input name='assignee' onInput={inputHandler}  required placeholder='ASSIGNEE' style={{color:theme.pallete.textPrimary}}  />
                <Button  >ADD TASK</Button>
                <Button onClick={props.onClose} >CANCLE</Button>
            </form>

            }
        </div>
        }
    </>
}

export default Model
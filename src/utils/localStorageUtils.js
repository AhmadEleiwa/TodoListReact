import { createContext } from "react"

const store =  (dataName, data ) =>{
    localStorage.setItem(dataName, JSON.stringify(data))
}
const load = (dataName) => {
    return JSON.parse(localStorage.getItem(dataName))
}



const DataContext = createContext({
    data:[],
    stastics : {all:0, done:0, pending:0, deleted: 0},
    changeHandlerLocal:()=>{},
    statHandler: ()=>{},
    changeHandler: ()=>{}
})
export {store, load}
export default DataContext
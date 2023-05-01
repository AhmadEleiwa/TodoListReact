import { createContext } from "react"

const store =  (dataName, data ) =>{
    localStorage.setItem(dataName, JSON.stringify(data))
}
const load = (dataName) => {
    return JSON.parse(localStorage.getItem(dataName))
}



const DataContext = createContext({
    data:[],
    changeHandler: ()=>{}
})
export {store, load}
export default DataContext
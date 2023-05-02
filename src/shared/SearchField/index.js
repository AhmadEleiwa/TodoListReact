import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons" 
import { useContext, useState } from "react"
import Theme from "../../utils/Theme"

import './style.css'
import DataContext from "../../utils/localStorageUtils"

const SearchField = props => {
    
    const theme = useContext(Theme)
    const dataContext = useContext(DataContext)
    
    const [baseData] = useState(dataContext.data)

    const searchHandler = (event) =>{
        let filtered_data = baseData.filter((item) =>  item.value.match(event.target.value)  || item.assignee.match(event.target.value) )
        dataContext.changeHandlerLocal(filtered_data)
    }

    return <div className="search-field" style={{
        backgroundColor:theme.pallete.paper,
        boxShadow:`0 2px 8px 0 ${theme.pallete.dropShadow}`
    }}>
        <FontAwesomeIcon color={theme.pallete.textSecondary} icon={faSearch} />
        <input onInput={searchHandler} placeholder="Search TODOs" style={{color:theme.pallete.textPrimary}} type={'search'} />
    </div>
}


export default SearchField
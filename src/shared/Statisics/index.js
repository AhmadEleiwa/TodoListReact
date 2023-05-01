import TitledCard from '../TitledCard'
import { faCheckToSlot, faCheck, faClock, faTrash} from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import DataContext from '../../utils/localStorageUtils'

import './style.css'

const Statsics = props =>{
    const dataContext = useContext(DataContext)


    return <div className='statisics-list'>
        <TitledCard title='TODOS' value={dataContext.stastics.all} icon={faCheckToSlot} />
        <TitledCard title='Done' value={dataContext.stastics.done} icon={faCheck} />
        <TitledCard title='PENDING' value={dataContext.stastics.pending}  icon={faClock} />
        <TitledCard title='DELETED' value={dataContext.stastics.deleted} icon={faTrash} />
    </div>
}

export default Statsics
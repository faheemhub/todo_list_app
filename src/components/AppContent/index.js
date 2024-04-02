import { Routes, Route } from 'react-router'
import './index.css'
import TaskInput from './TaskInput'
import TaskList from './TaskList'

function AppContent(){
    return(
        <div className="content">
            <Routes>
                <Route path = '/' element = {<TaskList/>}/>
                <Route path = '/addtask' element = {<TaskInput/>}/>
                {/* <Route path = '/logout' element = {<Logout/>}/> */}
            </Routes>
        </div>
    )
}

export default AppContent
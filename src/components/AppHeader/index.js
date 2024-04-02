import { Link } from 'react-router-dom'
import './index.css'
function AppHeader(){
    return(
        <div className="header">
        <div className='link1-div'>
        <Link to = '/addtask' className='link1'>Task Input</Link>
        </div>
        <div className='link2-div'>
        <Link to = '/' className='link2'>Task List</Link>
        </div>
        </div>
    )
}

export default AppHeader
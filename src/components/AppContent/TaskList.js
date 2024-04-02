import { useDispatch, useSelector } from 'react-redux'
import './TaskList.css'
import { removeToDo } from '../../redux/actions';

function TaskList(){
    const todos = useSelector(state=>state.operationReducer);
    const dispatch = useDispatch();
    console.log(todos)
    return(
        <div className="container">
        <div className="taskList">
        <h2 style={{textAlign:"center"}}>Task List</h2>
            <table className = 'taskTable' style={{marginTop:"5px"}}>
                <thead>
                    <th>Task Name</th>
                    <th>Status</th>
                    <th>Action</th>
                </thead>
                <tbody>
                {todos.map((todo)=>(
                    <tr key={todo.id}>
                        <td>{todo.todo}</td>
                        <td>{todo.completed==true?'completed':'incomplete'}</td>
                        <td>
                            <button style={{
                                padding: '2px 30px',
                                fontSize: '16px',
                                backgroundColor: 'red',
                                cursor: 'pointer'}}
                                    onClick={()=>dispatch(removeToDo(todo.id))}>Delete</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
       
    )
}

export default TaskList
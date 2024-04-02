import { useState } from "react";
import './TaskInput.css'
import { useDispatch } from "react-redux";
import { addToDo } from "../../redux/actions";
import { useNavigate } from "react-router";

function TaskInput(){
    const [task, setTask] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    async function handleSubmit(e){
        e.preventDefault();
        let date = new Date();
        let time = date.getTime();
        let todoObj = {
            id:"",
            todo:task,
            completed:false
        }
        setTask('');
        dispatch(addToDo(todoObj));
        alert('Task added successfully')
        navigate('/');
    }
    return(
        <div className="container">
        <div className="addTask">
            <h2>Add Task</h2>
            <form onSubmit={handleSubmit}>
                Task Name: <br/>
                <textarea type="text" id = 'textval' rows="5" cols="50"
                onChange={(e)=>setTask(e.target.value)}/><br/>
                <button id="addtask">Add</button>
            </form>
        </div>
        </div>
    )
}

export default TaskInput
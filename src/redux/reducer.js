import { ADD_TODO, REMOVE_TODO } from "./actions";


const initialState = [
    {id:1, todo:"purchase laptop", completed:false},
    {id:2, todo:"watering plants", completed:false},
    {id:3, todo:"sell car", completed:true}
];

export const operationReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_TODO:
            return [...state, action.payload];
        case REMOVE_TODO:
            let filteredToDos = state.filter((todo)=>todo.id!==action.payload);
            return filteredToDos;
        default: return state
    }
}


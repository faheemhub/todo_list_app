export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE-TODO'

export const addToDo = (payload) => {
    return{
        type: ADD_TODO,
        payload: payload
}
}

export const removeToDo = (payload) => {
    return{
        type: REMOVE_TODO,
        payload: payload
    }
}
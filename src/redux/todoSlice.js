import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        "id": 1,
        "title": "1",
        "completed": false
    },
    {
        "id": 2,
        "title": "2",
        "completed": false
    },
    {
        "id": 3,
        "title": "3",
        "completed": false
    }
]

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                completed: false
            };
            return [newTodo, ...state]
        },
        toggleTodo: (state, action) => {
            const index = state.findIndex( (todo) => { return todo.id === action.payload.id} );
            state[index].completed = action.payload.completed;
        },
        deleteTodo: (state, action) => {
            const index = state.findIndex( (todo) => { return todo.id === action.payload.id} );
            state.splice(index, 1)
        },
        clearAllCompletedTodos: (state) => {        
            return state.filter(todo => todo.completed === false)
        },
        toggleAllTodos: (state) => {
            const allCompleted = state.every(todo => {return todo.completed === true});
            if(allCompleted) {
                state.map(todo => todo.completed = false)
            } else {
                state.map(todo => todo.completed = true)
            }
        },
        updateTodo: (state, action) => {
            const index = state.findIndex( (todo) => { return todo.id === action.payload.id} );
            state[index].title = action.payload.value;
        },
    }
});

export const { 
    addTodo, 
    toggleTodo, 
    deleteTodo,
    toggleAllTodos, 
    updateTodo,
    clearAllCompletedTodos,
} = todoSlice.actions;

export default todoSlice.reducer;


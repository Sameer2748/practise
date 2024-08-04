import { createContext, useContext } from "react";

// we  reated a todocontext with states of todos and function like addtodo delettodo updatetodo toggletodo
export const TodoContext = new createContext({
    todos:[
        {id: 1, title: "Task 1", completed: false},
        {id: 2, title: "Task 2", completed: true},
        // Add more tasks here
    ],
    addTodo : (todo)=>{},
    updateTodo: (id, todo)=>{},
    deleteTodo: (id)=>{},
    toggleComplete: (id)=>{},
})

// now to reduce imports in app we export the usecontext of this todocontext from these in this usetodo hook
export const useTodo= ()=>{
    return useContext(TodoContext);
}
// also export the todoprovider for app.sj to wrap
export const TodoProvider = TodoContext.Provider;
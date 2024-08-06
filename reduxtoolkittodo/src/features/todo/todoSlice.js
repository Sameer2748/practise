import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[
        {id:1,text:"hello sameer"}
    ]
}


const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        // properties and function
        addTodo:(state, action)=>{
            
        },
        removeTodo:()=>{},
    }
})
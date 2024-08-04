import { TodoProvider } from "./contexts/index.js";
import {useState, useEffect } from "react";
import {TodoItem, TodoForm} from './components/index.js'

function App() {
  // whenever we use the name of context apis we can define functionality directly here 
  const [todos, setTodos] = useState([]);

  // add todo function take todo and create a ew todo with id and titke and set todos with all prevs todos
  const addTodo = (todo) => {
    const newTodo = { id: Date.now(), ...todo};
    setTodos((prev)=> [...prev, newTodo]);
  };

  // this updat todo get id of the element you want to update and the chnaged title also then find the ntodo with that id an put the title value in that  nd we wrap these in settodos to save all todos automatically
  const updateTodo = (id, todo) => {
    // in this we map on all todos which weget from prev then we check if id is equal then give todo otherwise give that prevtodo
    setTodos((prev)=> prev.map((prevTodo)=> (prevTodo.id === id?  todo: prevTodo )))
  };
  // this will delete that tod with that id from todos
  const deleteTodo = (id)=>{
    // in this we get all todos ew filter those prev todos by that id it return all todo which are not equal to that todo
    setTodos((prev)=> prev.filter((todo)=> todo.id !== id));
  }

  // this change the completed state of that todo 
  const toggleComplete = (id)=>{
    // in this we get all todos ew filter those prev todos by that id it return all todo which are not equal to that todo
    // then we map on that filtered todos and check if id is equal then give new todo with completed property toggled otherwise give that prevtodo
    setTodos((prev)=>
      prev.map((prevTodo)=>
         prevTodo.id === id ? {...prevTodo , completed:!prevTodo.completed } : prevTodo 
    ))
    // make toggle work 
    // setTodos((prev)=>
    //   prev.map((prevTodo)=>
    //     prevTodo.id === id? {...prevTodo, completed:!prevTodo.completed } : prevTodo 
    // ))
    
  }

  // Now get all todos from localstorage we get them in form of string and we parse them in json and settodos 
  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem('todos'));
    if(todos && todos.length>0){
      setTodos(todos);
    }
  }, [])
  // in this we set the todos in the localstorage whenever the todos changed
  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  return (
    // here we get the list of vaklue from contextapi of todo which have no value
    <TodoProvider value={{todos,addTodo, updateTodo,deleteTodo,toggleComplete}}>

    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">
          Manage Your Todos
        </h1>
        <div className="mb-4">{/* Todo form goes here */}<TodoForm/></div>
        <div className="flex flex-wrap gap-y-3">
          {/*Loop and Add TodoItem here */}
          {todos.map((todo)=>(
            <div key={todo.id} className="w-full">
              <TodoItem todo={todo}/>
            </div>
          ))}
        </div>
      </div>
    </div>
    </TodoProvider>
  );
}

export default App;

import { useState } from "react";
import { useTodo } from "../contexts";

function TodoForm() {
    const [title, setTitle] = useState();
    // we can access all our function and state form usetodo whih we export form todocontext file
    const {addTodo}  = useTodo();

    // we have imported addTodo  and we pass a object because in thatbfunction we expoect a object which contain title and completed attributes
    const add = (e)=>{
        e.preventDefault();
        if(!title){
            return;
        }
        // this will add the todo
        addTodo({ title, completed:false});
    }

    return (
        <form  onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button  type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;


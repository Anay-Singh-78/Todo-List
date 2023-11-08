import React from 'react'
import { useTodo } from '../context/Context';
import { useState } from 'react';
const TodoForm = () => {
    const {add} = useTodo();
    const [singleTodo , setSingleTodo] = useState("");

    const addTodo = (e) =>{
        e.preventDefault();
        if(!singleTodo)
        return;
        else
        add({Msg:singleTodo , completed:false })
        setSingleTodo("")
    }
  return (
    <div className='py-8 relative'>
        <form action="" onSubmit={addTodo}>
        <input
        type="text"
        value={singleTodo}
        placeholder='Write your Todo '
        onChange={(e)=>setSingleTodo(e.target.value)} 
        className='py-1 px-4 rounded-tl-lg rounded-bl-lg bg-purple-600 text-white font-semibold font-mono focus:outline-none focus:bg-purple-800'  
        />
        <button className=' text-neutral-900 rounded-tr-lg rounded-br-lg font-bold hover:bg-teal-700 bg-teal-600 px-2 py-1 absolute'>
            Add
        </button>
        </form>
    </div>
  )
}

export default TodoForm
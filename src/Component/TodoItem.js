import React, { useState } from 'react'
import { useTodo } from '../context/Context';
const TodoItem = ({todo}) => {
    const {toggleComplete , Delete , Update} = useTodo();
    const [edit , setEdit] = useState(false);
    const [editVal , setEditVal] = useState(todo.Msg);
    const handleEdit = () =>{
      console.log(edit);
      Update(todo.id , {...todo , Msg: editVal})
      setEdit(prev => !prev);
    }
  return (
    <div className='w-11/12 md:w-8/12 lg:w-1/2 mx-auto rounded-xl'>
      <div className={`flex justify-center rounded-2xl  px-6 md:px-0  py-1 items-center md:gap-10 gap-3 min-h-[3rem]  ${todo.completed ? "bg-rose-400" : "bg-teal-200"}`}>
        <input
        type='checkbox'
        onClick={()=>toggleComplete(todo.id)}
        value={todo.completed}
        className=' cursor-pointer p-2'
        />
        <input type="text"
        className={`md:text-2xl text-md ${todo.completed ? "line-through" :"" } bg-transparent py-1 outline-none focus-within:outline-dotted`}
        value={editVal}
        onChange={(e)=>setEditVal(e.target.value)}
        readOnly = {!edit}
         />
         {/* ✒️📝✅ */}
         <button
         onClick={handleEdit}
         className={`text-lg ${todo.completed ? " opacity-50 drop-shadow-lg cursor-not-allowed" : ""} `}
         disabled = {todo.completed}
         >
          {edit ? ("✅") : ("📝")}
         </button>
        <button 
        onClick={()=>Delete(todo.id) } 
        className=' border-1  rounded-xl border-black'
        title='Delete Item'
        >
             ❌
        </button>

        </div>
    </div>
  )
}

export default TodoItem
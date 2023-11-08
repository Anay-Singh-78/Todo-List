import React from 'react'
import { useTodo } from '../context/Context'
import TodoItem from './TodoItem'
const TodoList = () => {
    const {todos ,Update, Delete, toggleComplete} = useTodo()
  return (
    <div className='flex flex-col gap-10'>
        {
           todos &&  todos.map(todo =>(
                <TodoItem  todo={todo} key={todo.id}/>
            ))
        }
    </div>
  )
}

export default TodoList
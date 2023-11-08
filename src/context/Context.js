import { createContext, useState } from "react";
import { useContext } from "react";

export const TodoContext = createContext();

export  const ContextProvider = ({children}) => { 
        const[todos , setTodos] = useState([{
            id: 1,
            Msg : "Todo Msg",
            completed : false
        }]);
        // const[completed , setIsCompleted] = useState(false);
        // const [editable, setEditable] = useState(false);
         
        const add = (todo) =>{
            setTodos(prev => [{id:Date.now() , ...todo} , ...prev])
        }

        const Update = (id , todo) =>{
            setTodos((prevData)=>(
            prevData.map((eachTodo) => eachTodo.id === id ? todo : eachTodo)
            ))
        }

        const Delete = (id) =>{
            setTodos((prevData) =>(
                prevData.filter(eachTodo => eachTodo.id !== id)
            ) )
        }

        const toggleComplete = (id) =>{
            setTodos(prevTodo =>(
                prevTodo.map((eachTodo)=>(
                    eachTodo.id === id ?{...eachTodo , completed: !eachTodo.completed} :eachTodo
                ))
            ))
        }
        const value = {
            todos,
            setTodos,
            // completed,
            // setIsCompleted,
            // editable ,
            // setEditable,
            add,
            Update,
            Delete,
            toggleComplete
        }

        return <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
}

export const useTodo = () =>{
    return useContext(TodoContext)
}
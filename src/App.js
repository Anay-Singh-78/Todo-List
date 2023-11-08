import TodoForm from './Component/TodoForm';
import TodoList from './Component/TodoList';
// import { toast } from 'react-toastify'
import { useEffect } from 'react';
import { useTodo } from './context/Context';
function App() {
  const {setTodos , todos} = useTodo()
  useEffect(()=>{
    setTodos(JSON.parse(localStorage.getItem("TodoList")));
  },[]);

  useEffect(()=>{
    localStorage.setItem("TodoList",JSON.stringify(todos));
  }, [todos])
  return (
    <div className="App bg-slate-800 h-screen text-center">
     <TodoForm/>
     <TodoList/>
    </div>
  );
}

export default App;

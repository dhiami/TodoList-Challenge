import './App.css';
import react, { useState , useEffect} from "react"
import Form from './Component/Form';
import TodoList from './Component/Todolist';
import Todo from './Component/Todo';
function App() {
  const [inputText , setInputText] = useState ("");
  const [todos , setTodos] = useState ([]);
  const [status , setStatus] = useState ('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  useEffect(()=>{
    getLocalTodos();
  },[]);
  useEffect(()=> {
    filterHandler();
    saveLocalTodos();
  }, [todos,status]);
  const filterHandler = ()=> {
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
        case "uncompleted":
          setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
        default:
          setFilteredTodos(todos);
          break;
    }
  }
  const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if(localStorage.getItem("todos")===null){
      localStorage.setItem("todos", JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal)
    }
  }
  return (
    <div className="App">
    <header>
    <h1>Dhia's Todo List </h1>
    </header>
    <Form inputText={inputText} 
          todos={todos} 
          setStatus={setStatus}
          setTodos={setTodos}
          setInputText={setInputText}/>
    <TodoList setTodos={setTodos} 
              todos={todos}   
              filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;

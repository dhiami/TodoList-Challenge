import react from "react";
const Todo = ({text, todos,todo, setTodos}) => {
    const deleteHandler = () => {
            setTodos(todos.filter(el => el.id !== todo.id));
    };
    const completeHandler = () => {
        setTodos(todos.map(item=>{
            if(item.id === todo.id){
                return {
                    ... item , completed:!item.completed
                }
            } 
            return item;
    })) 
    }
    return (
          <div className="todo">
               <il className= {`todo-item ${todo.completed ? "completed" : ''}`} >{text}</il>
                <button 
                    onClick={completeHandler}
                    className="complete-btn">
                    <i className= "fas fa-check"></i>
                </button>
                <button 
                    onClick={deleteHandler}
                    className="trash-btn" >
                    <i className="fas fa-crash"></i> 
                </button>
                 </div>
    );
}
export default Todo;
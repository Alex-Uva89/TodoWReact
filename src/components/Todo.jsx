import '../style/main.css'
import { useState } from "react";

const Todo = ( {todos, completeTodo} ) => {
    // const [edit, setEdit] = useState({
    //     id: null,
    //     text: ''
    // })
    

    const [cancel, setCancel] = useState(false);

    const handleDelete = (e) => {
        setCancel(true);
        if(cancel) {
            e.target.parentElement.remove();    
        }

    }
    

   
    
    return todos.map((todo, index) => (
        <div className="todo" key={index}>
            <div key={todo.id}>{todo.created} {todo.text} </div>
            <button onClick={handleDelete} key={index}>❌</button>
        </div>
    ))
  
  }
  
  export default Todo;
import { useState } from 'react';
import InputTodo from './InputTodo';
import Todo from './Todo';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        if(!todo.text) {
            return;
        }
        const newTodos = [todo, ...todos]
        setTodos(newTodos)
        console.log(...todos)
    }

    const completeTodo = (id) => {
        let newTodos = todos.map(todo => {
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        });
        setTodos(newTodos)
    }

  return (
    <div>
        <h3>Ciao Utente, aggiungi un todo</h3>
        <InputTodo onSubmit={addTodo}/>
        <div className="containerTodo">
            <Todo todos={todos} completeTodo={completeTodo} />
        </div>
    </div>
  )
}

export default TodoList
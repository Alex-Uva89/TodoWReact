import React, { useState } from "react";
import '../style/main.css'


const InputTodo = (props) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value)
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    props.onSubmit({
      id: Math.floor(Math.random() * 100),
      text: inputValue,
      //indico orario (HH:mm:ss) di creazione
      created: new Date().toLocaleTimeString('it-IT', { hour12: false })
    });
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Scrivi..." 
          value={inputValue} 
          name="text"
          onChange={handleChange}
          className="input-todo"
        />
        <button className="button-todo">Aggiungi Todo</button>
      </form>
      
    </div>
  );

}

export default InputTodo;
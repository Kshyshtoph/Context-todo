import React from "react";
import { useContext, useState } from "react";
import { TodoCtx } from "../../context";

const Form = () => {
  const { setTodos, todos } = useContext(TodoCtx);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, inputValue]);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <button>Dodaj tudusa</button>
      </form>
    </div>
  );
};

export default Form;

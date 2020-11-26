import React from "react";
import { useContext } from "react";
import { TodoCtx } from "../../context";

const Item = ({ todo, index }) => {
  const { setTodos, todos } = useContext(TodoCtx);
  const handleClick = () => {
    const newTodos = todos.filter((todo) => todo !== todos[index]);
    setTodos(newTodos);
  };
  return (
    <li>
      {todo} <button onClick={handleClick}>usuń</button>
    </li>
  );
};

export default Item;

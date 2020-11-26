import React from "react";
import Item from "./Item";
import { useContext } from "react";
import { TodoCtx } from "../../context";

const List = () => {
  const { todos } = useContext(TodoCtx);
  return (
    <div className="list">
      <ul className="list__ul">
        {todos.map((el, index) => {
          return <Item todo={el} index={index} />;
        })}
      </ul>
    </div>
  );
};

export default List;

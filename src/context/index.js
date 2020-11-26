import React, { createContext, useState } from "react";

const init = ["wynieść naczynia", "spalić śmieci", "umyć zwłoki"];
export const TodoCtx = createContext({ todos: init, setTodos: () => {} });

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(init);
  return (
    <TodoCtx.Provider value={{ todos, setTodos }}>{children}</TodoCtx.Provider>
  );
};

import { Form, List } from "./components";
import React from "react";
import { TodoProvider } from "./context";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tudulista z contextem</h1>
      </header>
      <TodoProvider>
        <Form />
        <List />
      </TodoProvider>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { Todo } from "./model";

//creating a functional component
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");

  //creating a state for an array
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!todo) return;
    setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
    setTodo("");
  };

  return (
    <div className="App">
      <div className="heading">Taskify</div>
      <InputField todo={todo} handleAdd={handleAdd} setTodo={setTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;

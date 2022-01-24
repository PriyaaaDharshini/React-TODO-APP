import "./styles.css";
import TodoList from "./todolist";
import AddTODO from "./addTodo";
import { useState } from "react";

export default function App() {
  const [lists, setLists] = useState(["apple", "orange", "mango"]);
  const addlist = (newval) => {
    setLists((val) => [...val, newval]);
  };
  const removeTodo = (newval) => {
    setLists(lists.filter((val, e) => val !== newval));
  };

  return (
    <div className="App">
      <AddTODO addtoList={addlist} />
      <TodoList Lists={lists} removeTodo={removeTodo} />
    </div>
  );
}

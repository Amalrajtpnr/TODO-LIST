import logo from "./logo.svg";
import "./App.css";
import Task from "./components/task/task";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState([]);
  const [value, setvalue] = useState("");
  return (
    <div className="App">
      <div className="card">
        <h1 className="title">TODO LIST</h1>
        <div className="input">
          <input
            onChange={(event) => {
              setvalue(event.target.value);
            }}
            type="text"
            className="values"
          />
          <button
            onClick={() => {
              setTodo([...todo, value]);
            }}
            className="add"
          >
            ADD
          </button>
        </div>
        <div className="scroll">
          {todo.map((letters) => {
            return <Task type={letters} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

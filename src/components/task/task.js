import React from "react";
import "./task.css";

function Task(props) {
  return (
    <div className="task">
      <h1 className="text">
        {props.type} {props.name}
      </h1>
    </div>
  );
}

export default Task;

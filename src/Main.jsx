import React, { useState } from "react";
import TodoList from "./ToDoList";
// import Task from "./Task";

const Main = () => {
  const [val, setval] = useState("");
  const [items, setItems] = useState([]);
  const addTask = () => {
    setItems((oldItems) => {
      return [...oldItems, val];
    });
    setval("");
  };
  const addText = (e) => {
    setval(e.target.value);
  };

  const itemDelete = (id) => {
    console.log(id);
    setItems((oldItems) => {
      return oldItems.filter((errElem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <h1>Todo App</h1>

          <input
            type="text"
            onChange={addText}
            name="taskName"
            value={val}
            placeholder="Enter Task"
          />
          <button type="button" onClick={addTask}>
            +
          </button>

          <ol>
            {items.map((itemVal, index) => {
              return (
                <TodoList
                  text={itemVal}
                  key={index}
                  id={index}
                  onSelect={itemDelete}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default Main;

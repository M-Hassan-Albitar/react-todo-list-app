import React, { useCallback, useEffect, useState } from "react";
import Task from "./Task";
import { nanoid } from "nanoid";

const getData = () => {
  return JSON.parse(localStorage.getItem("list")) || [];
};

const setData = (item) => {
  localStorage.setItem("list", JSON.stringify(item));
};

function FullForm() {
  const [taskInput, setTaskInput] = useState({
    id: "",
    item: "",
  });
  const [all, setAll] = useState(getData);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = [...all, { ...taskInput, id: nanoid() }];
    setAll(newItem);
    setData(newItem);
    setTaskInput({ item: "" });
  };

  function handleDeleteBtn(itemId) {
    const newList = all.filter((f) => {
      if (itemId !== f.id) {
        return f;
      }
    });

    setAll(newList);
    setData(newList);

    // console.log("done");
  }

  const taskList = all.map((d) => {
    return (
      <div key={d.id}>
        <Task
          task={d.item}
          btnClicked={() => {
            handleDeleteBtn(d.id);
          }}
        />
      </div>
    );
  });

  return (
    <form onSubmit={handleSubmit}>
      <h4>Todo List</h4>
      <div className="form-control">
        <input
          placeholder="add your task here.."
          className="form-input"
          value={taskInput.item}
          onChange={(e) => {
            setTaskInput({ item: e.target.value });
          }}
          type="text"
        />
        <button className="btn" type="submit">
          add
        </button>
      </div>
      <div className="items">{taskList}</div>
    </form>
  );
}

export default FullForm;

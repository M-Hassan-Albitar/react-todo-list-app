import React from "react";
import { useState } from "react";
function Task(props) {
  const [done, setDone] = useState(false);
  const [addClass, setAddClass] = useState("none");

  return (
    <div className="single-item">
      <input
        type="checkbox"
        onChange={(e) => {
          setDone(e.target.checked);
          done ? setAddClass("none") : setAddClass("end");
          console.log(addClass);
        }}
      />
      <p className={addClass}> {props.task} </p>
      <input
        className="btn remove-btn"
        onClick={props.btnClicked}
        type="button"
        value="Delete"
      />
    </div>
  );
}

export default Task;

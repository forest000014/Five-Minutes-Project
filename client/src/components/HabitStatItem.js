import React, { useState } from "react";
import "./Styles.css";

const HabitStatItem = (props) => {
  return (
    <div className="inner-box">
      <h3 className="plain-text">{props.habitName + " (" + props.done + " / " + props.goal + ")"}</h3>
      <progress id="habit-progress" value={props.done} max={props.goal}/>
      <div className="plain-text">
        목표 달성까지 {props.goal - props.done} 남았습니다.
      </div>
    </div>
  );
};

export default HabitStatItem;

/*
    <div>
      <h3 className="plain-text">{props.habitName}</h3>
      <progress id="habit-progress" value="32" max="100">
        {" "}
        32%{" "}
      </progress>
      <div className="plain-text">목표 달성까지 {props.goal - props.done} 남았습니다.</div>
    </div>
*/

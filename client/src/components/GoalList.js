import React from "react";
import "./Styles.css";
import GoalItem from "./GoalItem";

const GoalList = (props) => {
  return (
    <div className="box">
      {props.items.map((goal) => (
        <GoalItem habitName={goal.habitName} amount={goal.amount} key={goal.id}/>
      ))}
    </div>
  );
};

// key={index}
export default GoalList;

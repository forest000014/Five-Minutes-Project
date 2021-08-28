import React from "react";
import RecordItem from "./RecordItem";
import "./Styles.css";

const RecordForm = (props) => {
  return (
    <div>
      {props.items.map((habit) => (
        <RecordItem habitName={habit.habitName} key={habit.id}/>
      ))}
    </div>
  );
};

export default RecordForm;

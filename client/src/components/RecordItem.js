import React from "react";
import "./Styles.css";

const RecordItem = (props) => {
  return (
    <form>
      <div className="plain-text">{props.habitName}</div>
      <input className="input-box" type="text"></input>
    </form>
  );
};

export default RecordItem;

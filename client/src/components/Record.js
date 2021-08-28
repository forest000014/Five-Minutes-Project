import React from "react";
import "./Record.css";
import RecordForm from "./RecordForm";

const Record = () => {
  const habits = [
    { id: 1, habitName: "독서" },
    { id: 2, habitName: "스쿼트" },
    //{ id: 3, habitName: "방청소" },
  ];
  return (
    <div className="box" id="record">
      <div className="plain-text" id="title">
        오늘의 습관을 기록해 주세요.
      </div>

      <RecordForm items={habits}></RecordForm>
      <input className="button" type="submit" value="일일 기록" />
    </div>
  );
};

export default Record;

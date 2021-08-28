import React from "react";
import "./SetGoal.css";
import GoalList from "./GoalList";

const SetGoal = () => {
  const goals = [
    { id: 1, habitName: "독서", amount: 300 },
    { id: 2, habitName: "스쿼트", amount: 1500 },
  ];

  return (
    <div className="box" id="set-goal">
      <div className="plain-text" id="title">
        이번 달의 습관 목표를 정해 보세요.
      </div>
      <GoalList items={goals}></GoalList>
      <input className="button" type="submit" value="목표 설정" />
    </div>
  );
};

export default SetGoal;

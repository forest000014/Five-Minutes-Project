import React, { useState } from "react";
import HabitStatItem from "./HabitStatItem";
import "./Styles.css";

const HabitStatList = (props) => {
  return (
    <div>
      {props.items.map((habitStat) => (
        <HabitStatItem
          habitName={habitStat.habitName}
          goal={habitStat.goal}
          done={habitStat.done}
          key={habitStat.id}
        ></HabitStatItem>
      ))}
    </div>
  );
};

export default HabitStatList;

import React, { useState } from "react";
import HabitStatList from "./HabitStatList";
import "./Stat.css";

const Stat = () => {
  const habitStats = [
    [
      { id: 1, habitName: "독서", goal: 300, done: 172 },
      { id: 2, habitName: "스쿼트", goal: 1500, done: 1300 },
    ],
    [
      { id: 1, habitName: "독서", goal: 250, done: 233 },
      { id: 2, habitName: "스쿼트", goal: 1000, done: 700 },
      { id: 3, habitName: "방청소", goal: 50, done: 35 },
    ],
    [
      { id: 1, habitName: "독서", goal: 100, done: 100 },
      { id: 2, habitName: "스쿼트", goal: 1500, done: 1410 },
    ],
    [
      { id: 1, habitName: "독서", goal: 333, done: 177 },
      { id: 2, habitName: "스쿼트", goal: 1555, done: 1330 },
    ],
    [
      { id: 1, habitName: "독서", goal: 111, done: 111 },
      { id: 2, habitName: "스쿼트", goal: 2000, done: 1870 },
      { id: 3, habitName: "방청소", goal: 60, done: 40 },
    ],
    [
      { id: 1, habitName: "독서", goal: 222, done: 220 },
      { id: 2, habitName: "스쿼트", goal: 4444, done: 1499 },
    ],
    [
      { id: 1, habitName: "독서", goal: 300, done: 172 },
      { id: 2, habitName: "스쿼트", goal: 999, done: 888 },
    ],
    [
      { id: 1, habitName: "독서", goal: 1111, done: 221 },
      { id: 2, habitName: "스쿼트", goal: 1000, done: 700 },
      { id: 3, habitName: "방청소", goal: 50, done: 35 },
    ],
    [
      { id: 1, habitName: "독서", goal: 555, done: 444 },
      { id: 2, habitName: "스쿼트", goal: 1500, done: 1410 },
    ],
    [
      { id: 1, habitName: "독서", goal: 777, done: 666 },
      { id: 2, habitName: "스쿼트", goal: 1555, done: 1330 },
    ],
    [
      { id: 1, habitName: "독서", goal: 123, done: 111 },
      { id: 2, habitName: "스쿼트", goal: 3333, done: 1870 },
      { id: 3, habitName: "방청소", goal: 60, done: 40 },
    ],
    [
      { id: 1, habitName: "독서", goal: 333, done: 220 },
      { id: 2, habitName: "스쿼트", goal: 1500, done: 1499 },
    ],
  ];

  let month = 0;
  //const [month, setMonth] = useState(0);

  const monthChangeHandler = (e) => {
    month = e.target.value - 1;
    console.log("month : " + month);
    //setMonth(e.target.value);
  };

  return (
    <div className="box">
      <select name="months" id="months" onChange={monthChangeHandler}>
        <option value="1">1월</option>
        <option value="2">2월</option>
        <option value="3">3월</option>
        <option value="4">4월</option>
        <option value="5">5월</option>
        <option value="6">6월</option>
        <option value="7">7월</option>
        <option value="8">8월</option>
        <option value="9">9월</option>
        <option value="10">10월</option>
        <option value="11">11월</option>
        <option value="12">12월</option>
      </select>

      <a href="/record">
        <input className="button" type="submit" value="일일 기록" />
      </a>
      <a href="/setgoal">
        <input className="button" type="submit" value="목표 설정" />
      </a>

      <HabitStatList items={habitStats[month]}></HabitStatList>

      <div>Calendar</div>
    </div>
  );
};

export default Stat;

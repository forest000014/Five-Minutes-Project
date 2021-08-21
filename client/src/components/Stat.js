import React, { Component } from 'react';
import "./Stat.css";

class Stat extends Component {
  render() {
    return (
      <div className="box">
        <select name="months" id="months">
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

        <br/>
        <div className="plain-text">습관을 더 추가하고 싶으신가요?</div>
        <a href="/habit_register"><div id="habit-register-link">습관 등록하러 가기</div></a>

        <p>
          <h3 className="plain-text">방청소</h3>
          <progress id="habit-progress" value="32" max="100"> 32% </progress>
          <div className="plain-text">목표 달성까지 xxx 남았습니다.</div>
        </p>

        <p>
          <h3 className="plain-text">독서</h3>
          <progress id="habit-progress" value="62" max="100"> 62% </progress>
          <div className="plain-text">목표 달성까지 xxx 남았습니다.</div>
        </p>

        <div>Calendar</div>
      </div>
    );
  }
}

export default Stat;

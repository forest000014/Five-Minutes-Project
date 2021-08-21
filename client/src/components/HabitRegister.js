import React, { Component } from "react";
import "./HabitRegister.css";

class HabitRegister extends Component {
  render() {
    return (
      <div className="box" id="habit-register">
        <div className="plain-text" id="title">
          이번 달에 실천할 습관을 등록해 보세요.
        </div>

        <form>
          <div className="plain-text">습관 종류</div>
          <div class="input">
            <input
              className="input-box"
              id="habit-name"
              placeholder="ex) 방청소"
              type="text"
              autocomplete="on"
            />
          </div>

          <div className="plain-text">목표량</div>
          <div class="input">
            <input
              className="input-box"
              id="goal"
              placeholder="ex) 5(번)"
              type="text"
              autocomplete="off"
            />
          </div>

          <input className="button" type="submit" value="습관 등록" />

          <div className="plain-text" class="register">
            오늘의 습관을 기록하고 싶으신가요?
            <a href="/upload">
              <div id="upload-link">기록하러 하기</div>
            </a>
          </div>

        </form>
      </div>
    );
  }
}

export default HabitRegister;

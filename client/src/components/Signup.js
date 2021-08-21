import React, { Component } from "react";
import "./Signup.css";

class Signup extends Component {
  render() {
    return (
      <div className="box" id="container-login">
        <div id="title">Signup</div>

        <form>
          <div className="plain-text">아이디</div>
          <div class="input">
            <input
              id="username"
              className="input-box"
              type="text"
              required
              class="validate"
              autocomplete="off"
            />
          </div>

          <div className="plain-text">비밀번호</div>
          <div class="input">
            <input
              id="password"
              className="input-box"
              type="password"
              required
              class="validate"
              autocomplete="off"
            />
          </div>

          <div className="plain-text">비밀번호 재입력</div>
          <div class="input">
            <input
              id="password_confirm"
              className="input-box"
              type="password"
              required
              class="validate"
              autocomplete="off"
            />
          </div>

          <a href="/login">
            <button className="button" id="signup-link">
              가입
            </button>
          </a>

          <div className="plain-text" class="register">
            이미 아이디가 있으신가요?
            <a href="/login">
              <div id="login-link">로그인하기</div>
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;

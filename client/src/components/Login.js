import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  render() {
    return (
      <div className="box" id="container-login">
        <form action="/stat" method="get">
          <div className="plain-text" id="login-text">
            아이디
          </div>
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

          <div className="plain-text" id="password-text">
            비밀번호
          </div>
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
          <input className="button" type="submit" value="로그인" />
        </form>

        <div className="plain-text" class="register">
          아이디가 없으신가요?
          <a href="/signup">
            <div id="register-link">가입하기</div>
          </a>
        </div>
      </div>
    );
  }
}

export default Login;

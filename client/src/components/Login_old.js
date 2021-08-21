import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
        <div id="container-login">
            <div id="title">
                Login
            </div>

            <form action="/stat" method="get">
                <div class="input">
                    <input id="username" placeholder="Username" type="text" required class="validate" autocomplete="off"/>
                </div>

                <div class="input">
                    <input id="password" placeholder="Password" type="password" required class="validate" autocomplete="off"/>
                </div>
                <input type="submit" value="Log In" />
            </form>

            <div class="register">
                Don't have an account yet?
                <a href="/signup"><button id="register-link">Register here</button></a>
            </div>
        </div>
    );
  }
}

export default Login;

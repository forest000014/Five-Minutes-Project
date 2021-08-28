import React, { useState } from 'react';

import "./index.css";

const App = () => {
  //const [a, setA] = useState(0);

  return (
    <div>
      <div className="App">
        반갑습니다! 5분만 습관 모임에 오신 것을 환영합니다.
      </div>
      <a href="/login">
        <button id="login-link">Log in</button>
      </a>
      <a href="/signup">
        <button id="signup-link">Sign Up</button>
      </a>
    </div>
  );
};

export default App;

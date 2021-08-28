import React, { useState } from "react";
import "./Styles.css";

const GoalItem = (props) => {
  //const [enteredAmount, setEnteredAmount] = useState('');
  //   const amountChangeHandler = (e) => {
  //     setEnteredAmount(e.target.value);
  //   };

  return (
    <div>
      <div className="plain-text">{props.habitName}</div>
      <input type="text" placeholder={props.amount} />
    </div>
  );
};

export default GoalItem;
/*
        <input
          type="text"
          value={enteredAmount}
          onChange={amountChangeHandler}
        />
*/

/*
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

          <input className="button" type="submit" value="목표 설정" />

          
        </form>
*/

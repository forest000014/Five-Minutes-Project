import React, { Component } from "react";
import "./Upload.css";

class Upload extends Component {
  render() {
    return (
      <div className="box" id="habit-upload">
        <div className="plain-text" id="title">
          오늘의 습관을 기록해 보세요.
        </div>

        <form>
          <div className="plain-text">습관 1</div>
          <div className="plain-text">토글</div>

          <input className="button" type="submit" value="일일 기록 업로드" />
        </form>
      </div>
    );
  }
}

export default Upload;

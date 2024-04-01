import React from "react";
import MainIndex from "./screens/MainIndex";
import withRouter from "./withRouter";

function App(props) {

  return (
    <div id="mytask-layout" className="theme-indigo">
      <MainIndex></MainIndex>
    </div>
  );
}


export default withRouter(App);

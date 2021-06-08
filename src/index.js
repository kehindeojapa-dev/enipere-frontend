import React from "react";
import Reactdom from "react-dom";

// Components Import

import Main from "./Components/MainPage";
// import Login from "./Components/WriterLogin";
//Stylesheet
import "./index.css";

const App = () => {
  return (
    <>
      {/* <Login /> */}
      <Main />
    </>
  );
};

Reactdom.render(<App />, document.getElementById("root"));

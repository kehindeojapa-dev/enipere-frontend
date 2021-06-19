import React from "react";
import Reactdom from "react-dom";

// Components Import

import Main from "./Components/MainPage";
// import Main from "./Components/WriterLogin";
// import Main from "./Components/WriterPage";
// import Main from "./Components/Post";
//Stylesheet
import "./index.css";

const App = () => {
  return (
    <>
      <Main />
    </>
  );
};

Reactdom.render(<App />, document.getElementById("root"));

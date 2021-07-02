import React from "react";
import Reactdom from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// Components Import

import Main from "./Components/MainPage";
import Login from "./Components/WriterLogin";
import Post from "./Components/Post";
import WriterPage from "./Components/WriterPage";
import SignUp from "./Components/WriterSignup";
//Stylesheet
import "./index.css";

const App = () => {
  return (
    <>
      {/* <Main /> */}

      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/writerPage/:id" children={<WriterPage />}></Route>
        {/* <Route path="/writerPage"> */}
        {/* <WriterPage /> */}
        {/* </Route> */}
        <Route path="/post/:id" children={<Post />}></Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </>
  );
};

Reactdom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

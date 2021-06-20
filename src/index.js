import React from "react";
import Reactdom from "react-dom";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

// Components Import

import Main from "./Components/MainPage";
import Login from "./Components/WriterLogin";
import WriterPage from "./Components/WriterPage";
import Post from "./Components/Post";
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
        <Route path="/writerPage">
          <WriterPage />
        </Route>
        <Route path="/post/:id" children={<Post />}></Route>
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

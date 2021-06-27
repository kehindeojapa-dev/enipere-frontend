import React, { useState } from "react";
import {
  Redirect,
  Route,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";
import axios from "../axios";
import Header from "./Header";
import Footer from "./Footer";
import WriterPage from "./WriterPage";

const Main = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);
  const [userData, setUserData] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    if (username !== null && password !== null) {
      await axios
        .post("/users/login", {
          username,
          password,
        })
        .then((data) => {
          setUserData(data.data);
          setLoginStatus(true);
        });
    }
  };
  return (
    <>
      <div className="app-login">
        <form method="post" onSubmit={handleLogin}>
          <label htmlFor="user">Username</label>
          <input
            type="text"
            name="user"
            id="user"
            placeholder="Enter username here"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password here"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value="Login" />
        </form>
        {loginStatus && (
          <>
            <Redirect to="/writerPage" />
          </>
        )}
      </div>

      <Switch>
        <Route exact path="/writerPage">
          <WriterPage props={userData} />
        </Route>
      </Switch>
    </>
  );
};

const loginApp = () => {
  return (
    <>
      <Header />
      <Router>
        <Main />
      </Router>
      <Footer />
    </>
  );
};

export default loginApp;

import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Main = () => {
  return (
    <>
      <div className="app-login">
        <form action="#">
          <label htmlFor="user">Username</label>
          <input
            type="text"
            name="user"
            id="user"
            placeholder="Enter username here"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password here"
          />
          <input type="submit" value="Login" />
        </form>
      </div>
    </>
  );
};

const loginApp = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default loginApp;

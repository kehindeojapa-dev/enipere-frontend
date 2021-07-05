import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "../axios.js";

import Header from "./Header";
import Footer from "./Footer";

const Main = () => {
  //States
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [passStatus, setPassStatus] = useState({});
  const [signStatus, setSignStatus] = useState(false);

  const checkPassword = () => {
    if (password === cpassword) {
      setPassStatus({
        status: true,
        msg: "Password validation successful",
      });
      setTimeout(() => {
        setPassStatus({
          status: true,
          msg: "",
        });
      }, 2000);
    } else {
      setPassStatus({
        status: false,
        msg: "Password validation failed",
      });
      setTimeout(() => {
        setPassStatus({
          status: false,
          msg: "",
        });
      }, 3000);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (username !== null && password === cpassword) {
      await axios
        .post("/users", {
          username: username.toLowerCase(),
          email,
          password,
        })
        .then((data) => setSignStatus(true))
        .catch((err) => console.log(err));
    } else {
      checkPassword();
    }
  };

  return (
    <>
      <div className="app-login">
        <form action="#" onSubmit={handleSignUp}>
          <label htmlFor="user">Pick a Username</label>
          <input
            type="text"
            name="user"
            id="user"
            placeholder="Enter username here"
            minlength={6}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email address here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Choose Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password here"
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="checkPassword">Validate Password</label>
          <input
            type="password"
            name="checkPassword"
            id="checkPassword"
            placeholder="Retype password here"
            minLength={6}
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
            // onBlur={() => checkPassword()}
          />
          <p className={`passFail ${passStatus.status && "passSuccess"}`}>
            {passStatus.msg}
          </p>
          <input type="submit" value="SignUp" />
        </form>
      </div>
      {signStatus ? <Redirect to="/login" /> : null}
    </>
  );
};

const WriterSignup = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default WriterSignup;

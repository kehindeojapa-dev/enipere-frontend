import React from "react";
import { Link } from "react-router-dom";

const LoginSignUp = () => {
  return (
    <>
      <nav className="login-signup">
        <ul>
          <li>
            Have an existing account
            <Link to="/login" className="nav-login">
              Login
            </Link>
          </li>
          <li>
            Publish your articles with us
            <Link to="/signup" className="nav-signup">
              SignUp
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default LoginSignUp;

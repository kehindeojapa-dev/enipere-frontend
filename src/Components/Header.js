import React from "react";
import { Link } from "react-router-dom";
// import LoginSignUp from './'
// import Search from "./Search";

const Header = () => {
  return (
    <header className="app-header">
      <div>
        <Link to="/">
          <h2 className="app-title">EniPere's</h2>
        </Link>
      </div>
    </header>
  );
};

export default Header;

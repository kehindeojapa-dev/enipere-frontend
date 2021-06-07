import React from "react";
import Search from "./Search";

const Header = () => {
  return (
    <header className="app-header">
      <div>
        <h2 className="app-title">EniPere's</h2>
      </div>
      <div>
        <Search />
      </div>
    </header>
  );
};

export default Header;

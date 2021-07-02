import React, { useState } from "react";

const Footer = () => {
  const [writer, setWriter] = useState("");

  const handleSearch = () => {
    alert(writer);
  };
  return (
    <>
      <footer className="app-footer">
        <div className="app-footer-lists">
          <h2>Writer's Corner</h2>
          <p>View only your favourite writer articles</p>
          <form onSubmit={handleSearch}>
            <input type="text" placeholder="Enter writer's username" required />
          </form>
        </div>

        <div className="app-footer-social">
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
          </ul>

          <p>
            &copy;2021, developed by{" "}
            <a href="https:github.com/kehindeojapa-dev" target="yes">
              Kehinde's Creative
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

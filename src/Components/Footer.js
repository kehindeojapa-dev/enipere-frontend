import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "../axios";

const Footer = () => {
  const [writer, setWriter] = useState("");
  const [writerStatus, setWriterStatus] = useState(false);
  const handleSearch = async (e) => {
    e.preventDefault();
    const newWriter = writer.toLocaleLowerCase();
    await axios
      .get(`/server/postStatus/username/${newWriter}`)
      .then((data) => {
        setWriterStatus(data.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <footer className="app-footer">
        <div className="app-footer-lists">
          <h2>Writer's Corner</h2>
          <p>View only your favourite writer articles</p>
          <form onSubmit={handleSearch} className="app-footer-form">
            <input
              type="text"
              placeholder="Enter writer's username"
              required
              value={writer}
              onChange={(e) => setWriter(e.target.value)}
            />
            <input type="submit" value="view" />
          </form>
          {writerStatus ? <Redirect to={`writer/${writer}`} /> : null}
        </div>

        <div className="app-footer-social">
          {/* <ul>
            <li>Facebook</li>
            <li>Twitter</li>
          </ul> */}

          <p>
            &copy;2021, developed by
            <a href="https://github.com/kehindeojapa-dev" target="yes">
              Kehinde's Creative
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

import React, { useState, useEffect } from "react";
import axios from "../axios";

import Data from "../Data/sample1";

// Components Import
import Header from "./Header";
import Footer from "./Footer";

import defaultImage from "../Images/pad.jpg";
const MainPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("/server").then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <>
      <Header />
      <section className="article-intro">
        <h2>Articles for you</h2>
      </section>
      <section className="article-container">
        {posts.map(({ id, Brief, Author, Title, cover }) => {
          return (
            <div key={id} className="article-card">
              <img src={cover} alt={Title} />
              <h2>{Title}</h2>
              <p>{Brief}</p>
              <h6>{Author}</h6>
            </div>
          );
        })}
      </section>
      <Footer />
    </>
  );
};

export default MainPage;

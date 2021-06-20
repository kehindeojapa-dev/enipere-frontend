import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import axios from "../axios";

// Components Import
import Header from "./Header";
import Footer from "./Footer";

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
        {posts.map(({ _id, id, Brief, Author, Title, cover }) => {
          return (
            <Link to={`/post/${_id}`} key={id}>
              <div key={id} className="article-card">
                <img src={cover} alt={Title} />
                <h2>{Title}</h2>
                <p>{Brief}</p>
                <h6>{Author}</h6>
              </div>
            </Link>
          );
        })}
      </section>
      <Footer />
    </>
  );
};

export default MainPage;

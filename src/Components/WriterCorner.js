import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "../axios";
// Component Import
import Header from "./Header";
import LoginSignup from "./LoginSignUp";
import Footer from "./Footer";

const Main = () => {
  const username = useParams().id;
  const [post, setPost] = useState([]);
  const lowerCased = username.toLowerCase();
  useEffect(() => {
    axios
      .get(`/server/posts/username/${lowerCased}`)
      .then((data) => setPost(data.data));
  }, [lowerCased]);
  return (
    <>
      <section className="writer-corner">
        <h1>
          Articles posted by <span>{username}</span>
        </h1>
      </section>
      <section className="article-container">
        {post.map(({ _id, id, Brief, Author, Title, cover, image }) => {
          return (
            <Link to={`/post/${_id}`} key={id}>
              <div key={id} className="article-card">
                {cover && <img src={cover} alt={Title} />}
                {image && <img src={image} alt={Title} />}
                <h2>{Title}</h2>
                <p>{Brief}</p>
                <h6>{Author}</h6>
              </div>
            </Link>
          );
        })}
      </section>
    </>
  );
};

const Page = () => {
  return (
    <>
      <div className="app-header-twk1">
        <Header />
        <LoginSignup />
      </div>

      <Main />
      <Footer />
    </>
  );
};

export default Page;

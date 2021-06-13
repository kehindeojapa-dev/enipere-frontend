import React from "react";
import Header from "./Header";
import Footer from "./Footer";

// Image import
import defaultImage from "../Images/pad.jpg";

// Data import
import Data from "../Data/sample1";

const Main = ({ Title, Author, Intro }) => {
  return (
    <>
      <section className="postContainer">
        <h1>
          {Title}
          <span>{Author}</span>
        </h1>
        {defaultImage && <img src={defaultImage} alt="post" />}

        <p>{Intro}</p>
      </section>

      <section className="commentContainer">
        <h3>Comments</h3>
      </section>
    </>
  );
};

const Post = () => {
  return (
    <>
      <Header />
      <Main {...Data[0]} />
      <Footer />
    </>
  );
};

export default Post;

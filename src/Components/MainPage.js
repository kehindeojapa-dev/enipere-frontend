import React from "react";

import Data from "../Data/sample1";

import defaultImage from "../Images/pad.jpg";
const MainPage = () => {
  return (
    <>
      <section className="article-intro">
        <h2>Articles for you</h2>
      </section>
      <section className="article-container">
        {Data.map(({ id, Intro, Author, Title }) => {
          return (
            <div key={id} className="article-card">
              <img src={defaultImage} alt={Title} />
              <h2>{Title}</h2>
              <p>{Intro}</p>
              <h6>{Author}</h6>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default MainPage;

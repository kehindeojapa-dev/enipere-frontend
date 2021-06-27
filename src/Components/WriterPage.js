import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import UploadForm from "./Upload";
import defaultImage from "../Images/pad.jpg";
import Data from "../Data/sample1";

const Upload = () => {
  const [showForm, setShowForm] = useState(false);
  const [buttonContent, setButtonContent] = useState("Upload Post");
  const showUpload = () => {
    setShowForm(!showForm);
    if (buttonContent === "Upload Post") {
      setButtonContent("Cancel");
    } else {
      setButtonContent("Upload Post");
    }
  };

  return (
    <>
      <div className="upload">
        <button className="uploadBtn" onClick={showUpload}>
          {buttonContent}
        </button>
        {showForm && <UploadForm />}
      </div>
    </>
  );
};

const Posts = () => {
  return (
    <>
      <section className="writerPage">
        <div className="writerPage-intro">
          <h2>Eniola's Home</h2>
          <img src={defaultImage} alt="writer's pic" />
        </div>

        <Upload />

        <div className="article-container writerPage-Posts">
          {Data.slice(0, 4).map(({ id, Intro, Author, Title }) => {
            return (
              <div key={id} className="article-card">
                <img src={defaultImage} alt={Title} />
                <h2>{Title}</h2>
                <p>{Intro}</p>
                <h6>{Author}</h6>
                <button className="writerPage-deleteBtn">Delete</button>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

const WriterPage = (props) => {
  console.log(props);
  return (
    <>
      <Header />
      <Posts />
      <Footer />
    </>
  );
};

export default WriterPage;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../axios";
import Header from "./Header";
import Footer from "./Footer";
import UploadForm from "./Upload";

const Upload = (props) => {
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
        {showForm && <UploadForm {...props} />}
      </div>
    </>
  );
};

const Posts = () => {
  const userID = useParams().id;
  const [userData, setUserData] = useState("");
  const [post, setPost] = useState([]);

  const handleDelete = async (id) => {
    await axios.delete(`/server/post/${id}`);
  };

  useEffect(() => {
    axios.get(`/users/userdata/${userID}`).then((data) => {
      setUserData(data.data);
    });
  }, [userID]);

  useEffect(() => {
    axios
      .get(`/server/posts/username/${userData.username}`)
      .then((posts) => setPost(posts.data));
  }, [userData]);
  return (
    <>
      <section className="writerPage">
        <div className="writerPage-intro">
          <h2>{userData.username}</h2>
        </div>

        <Upload props={userData} />

        <div className="article-container writerPage-Posts">
          {post.map(({ _id, id, Brief, Author, Title, cover, image }) => {
            const postID = _id;
            return (
              <div key={id} className="article-card">
                {cover && (
                  <>
                    <img src={cover} alt={Title} />
                  </>
                )}
                {image && (
                  <>
                    <img src={image} alt={Title} />
                  </>
                )}
                <h2>{Title}</h2>
                <p>{Brief}</p>
                <h6>{Author}</h6>
                <button
                  className="writerPage-deleteBtn"
                  onClick={() => handleDelete(postID)}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

const WriterPage = () => {
  return (
    <>
      <Header />
      <Posts />
      <Footer />
    </>
  );
};

export default WriterPage;

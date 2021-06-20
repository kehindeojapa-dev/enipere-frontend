import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import axios from "../axios";
import { useParams } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

// Image import
import defaultImage from "../Images/pad.jpg";

// Data import
import Data from "../Data/sample1";
import commentData from "../Data/comment";

// AddComment Component
const AddComment = () => {
  return (
    <>
      <form action="#" className="commentForm">
        <div className="row1">
          <input
            type="text"
            name="name"
            placeholder="enter name here"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="enter valid email here"
            required
          />
        </div>
        <textarea
          name="message"
          cols="30"
          rows="3"
          placeholder="Enter your comment here"
          required
        ></textarea>
        <input type="submit" value="Post comment" />
      </form>
    </>
  );
};

// Comment Component
const Comments = (props) => {
  const Comments = props.comment;
  return (
    <>
      {Comments.map((comment) => {
        return (
          <div key={comment.id} className="commentItem">
            <Avatar />
            <section>
              <div className="commentItem-box1">
                <h2>{comment.name}</h2>
                <p>{comment.email}</p>
              </div>
              <p className="commentItem-message">{comment.message}</p>
            </section>
          </div>
        );
      })}
    </>
  );
};

const Main = (props) => {
  const { Title, Author, Intro } = props.post;
  const Comment = props.comment;

  console.log(useParams());

  //States
  const [switchComment, setSwitchComment] = useState(false);

  //Function to toggle addComment Form
  const toggleComment = () => {
    if (switchComment === false) {
      setSwitchComment(true);
    } else {
      setSwitchComment(false);
    }
  };

  return (
    <>
      <section className="postContainer">
        <h1 className="postContainer-title">
          {Title}
          <span>{Author}</span>
        </h1>
        {defaultImage && <img src={defaultImage} alt="post" />}

        <section className="postContainer-message">
          <p>{Intro}</p>
        </section>
      </section>

      <section className="commentContainer">
        <h3>Comments</h3>
        <button className="commentBtn" onClick={toggleComment}>
          Post a comment
        </button>
        {switchComment && (
          <>
            <AddComment />
          </>
        )}

        <Comments comment={Comment} />
      </section>
    </>
  );
};

const Post = () => {
  return (
    <>
      <Header />
      <Main post={Data[0]} comment={commentData} />
      <Footer />
    </>
  );
};

export default Post;

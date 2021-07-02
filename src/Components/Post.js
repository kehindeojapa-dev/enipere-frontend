import React, { useState, useEffect, useRef } from "react";
import { Avatar } from "@material-ui/core";
import axios from "../axios";
import { useParams } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

// AddComment Component
const AddComment = ({ postID }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleComment = async (e) => {
    e.preventDefault();
    if (name !== "" && email !== "" && message !== "") {
      await axios.post("/comments/", {
        postID: postID,
        name,
        email,
        message,
      });
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <>
      <form action="#" className="commentForm" onSubmit={handleComment}>
        <div className="row1">
          <input
            type="text"
            name="name"
            placeholder="enter name here"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="enter valid email here"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <textarea
          name="message"
          cols="30"
          rows="3"
          placeholder="Enter your comment here"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <input type="submit" value="Post comment" />
      </form>
    </>
  );
};

// Comment Component
const Comments = ({ postID }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    axios
      .get(`/comments/${postID}`)
      .then((comments) => setComments(comments.data));
  }, [postID]);

  return (
    <>
      {comments.map((comment) => {
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
  const postID = useParams().id;
  const el = useRef(null);

  //States
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get(`/server/post/${postID}`)
      .then((response) => setPost(response.data));
  }, [postID]);

  return (
    <>
      <section className="postContainer">
        <h1 className="postContainer-title">
          {post.Title}
          <span>{post.Author}</span>
        </h1>
        {post.cover && <img src={post.cover} alt="post" />}
        {post.image && <img src={post.image} alt={post.title} />}
        <section className="postContainer-message">
          <div ref={el}>
            {useEffect(() => {
              el.current.innerHTML = post.doc;
            })}
          </div>
        </section>
      </section>

      <section className="commentContainer">
        <h3>Comments</h3>
        <AddComment postID={postID} />

        <Comments postID={postID} />
      </section>
    </>
  );
};

const Post = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default Post;

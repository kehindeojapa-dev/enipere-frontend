import React, { useState, useEffect, useRef } from "react";
import axios from "../axios";
const Upload = () => {
  //State for each input field
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [brief, setBrief] = useState("");
  const [format, setFormat] = useState("");
  const [docFile, setDocFile] = useState({});
  const [cover, setCover] = useState({});
  const [imgFile, setImgFile] = useState({});
  const el = useRef();

  const [docFormat, setDocFormat] = useState(false);
  const [imgFormat, setImgFormat] = useState(false);

  const [files, setFiles] = useState({
    title: "",
    author: "",
    brief: "",
    format: "",
  });

  useEffect(() => {
    setFiles({ ...files, title, author, brief, format });
  }, [title, author, brief, format]);

  const handleDoc = (e) => {
    const file = e.target.files[0];
    setDocFile(file);
  };

  const handleCover = (e) => {
    const file = e.target.files[0];
    setCover(file);
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImgFile(file);
  };

  const showFile = (e) => {
    if (e.target.value === "doc") {
      setDocFormat(true);
      setImgFormat(false);
      setImgFile({});
    } else if (e.target.value === "image") {
      setImgFormat(true);
      setDocFormat(false);
      setDocFile({});
      setCover({});
    } else {
      setImgFormat(false);
      setDocFormat(false);
      setDocFile({});
      setCover({});
      setImgFile({});
    }
  };

  const uploadFile = async (e) => {
    e.preventDefault();

    //NOTE: Create error-handling here for uploading post.

    const formdata = new FormData();
    if (
      title !== "" &&
      author !== "" &&
      brief !== "" &&
      format !== "" &&
      ((docFile.name !== undefined && cover.name !== undefined) ||
        imgFile.name !== undefined)
    ) {
      if (files.format === "doc") {
        formdata.append("doc", docFile);
        formdata.append("cover", cover);
      } else {
        formdata.append("image", imgFile);
      }
      formdata.append("details", JSON.stringify(files));
      await axios.post("/server", formdata);

      setTitle("");
      setAuthor("");
      setBrief("");
      setFormat("");
      setImgFormat(false);
      setDocFormat(false);
    }
  };

  return (
    <>
      <form action="#" className="uploadForm">
        <label htmlFor="Title">Title</label>
        <input
          type="text"
          name="Title"
          placeholder="Enter article title here..."
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="Author">Author</label>
        <select
          name="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option>Author</option>
          <option value="Eniola">Eniola</option>
          <option value="Piere">Piere</option>
          <option value="Tolani">Tolani</option>
        </select>
        <label htmlFor="Brief">Brief</label>
        <textarea
          name="Brief"
          id="brief"
          placeholder="write a short description here..."
          required
          value={brief}
          onChange={(e) => setBrief(e.target.value)}
        ></textarea>
        <label htmlFor="Format">Select Format</label>
        <select
          name="format"
          value={format}
          onChange={(e) => {
            setFormat(e.target.value);
            showFile(e);
          }}
        >
          <option>Pick format</option>
          <option value="doc">Doc</option>
          <option value="image">Image</option>
        </select>
        {docFormat && (
          <>
            <input
              type="file"
              name="doc"
              accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              required
              ref={el}
              onChange={handleDoc}
            />
            <label htmlFor="cover">Cover</label>
            <input
              type="file"
              name="cover"
              accept=".jpg, .jpeg, .png"
              onChange={handleCover}
            />
          </>
        )}
        {imgFormat && (
          <input
            type="file"
            name="image"
            accept=".jpg, .jpeg, .png"
            required
            onChange={handleImage}
          />
        )}
        <input type="submit" value="Post" onClick={uploadFile} />
      </form>
    </>
  );
};

export default Upload;

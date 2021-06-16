import React, { useState, useEffect } from "react";
import axios from "../axios";
const Upload = () => {
  //State for each input field
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [brief, setBrief] = useState("");
  const [format, setFormat] = useState("");
  const [docFile, setDocFile] = useState();
  const [cover, setCover] = useState();
  const [imgFile, setImgFile] = useState();

  const [formatChoice, setFormatChoice] = useState(true);
  const formatType = (e) => {
    if (e.target.value === "image") {
      setFormatChoice(false);
    } else {
      setFormatChoice(true);
    }
  };

  const [files, setFiles] = useState({
    title: "Hello",
    author: "how",
    brief: "are",
    format: "you",
    docFile: "doing",
    cover: "today",
    imgFile: "myfriend",
  });

  useEffect(() => {
    setFiles({ ...files, title, author, brief, format });
  }, [title, author, brief, format]);

  const fetchFile = async (e) => {
    e.preventDefault();
    // console.log(files.format, files.docFile);
    //NOTE: Create error-handling here for uploading post.
    await axios.post("/server", files);
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
          onClick={(e) => formatType(e)}
          value={format}
          onChange={(e) => setFormat(e.target.value)}
        >
          <option>Pick format</option>
          <option value="doc">Doc</option>
          <option value="image">Image</option>
        </select>
        {formatChoice ? (
          <>
            <input
              type="file"
              name="doc"
              accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              required
              value={docFile}
              onChange={(e) => console.log(e)}
            />
            <label htmlFor="cover">Cover(optional)</label>
            <input type="file" name="cover" accept=".jpg, .jpeg, .png" />
          </>
        ) : (
          <input type="file" name="image" accept=".jpg, .jpeg, .png" required />
        )}
        <input type="submit" value="Post" onClick={fetchFile} />
      </form>
    </>
  );
};

export default Upload;

import React, { useState } from "react";

const Upload = () => {
  const [formatChoice, setFormatChoice] = useState(true);
  const formatType = (e) => {
    if (e.target.value === "image") {
      setFormatChoice(false);
    } else {
      setFormatChoice(true);
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
        />
        <label htmlFor="Author">Author</label>
        <select name="Author">
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
        ></textarea>
        <label htmlFor="Format">Select Format</label>
        <select name="format" onClick={(e) => formatType(e)}>
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
            />
            <label htmlFor="cover">Cover(optional)</label>
            <input type="file" name="cover" accept=".jpg, .jpeg, .png" />
          </>
        ) : (
          <input type="file" name="image" accept=".jpg, .jpeg, .png" required />
        )}
        <input type="submit" value="Post" />
      </form>
    </>
  );
};

export default Upload;

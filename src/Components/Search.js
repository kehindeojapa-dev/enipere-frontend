import React, { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  return (
    <input
      className="search-bar"
      type="search"
      placeholder="Search..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      // onKeyPress={(e) => setSearch(e.target.value)}
    />
  );
};

export default Search;

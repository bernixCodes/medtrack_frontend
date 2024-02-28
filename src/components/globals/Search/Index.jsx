import { useState } from "react";
import "./search.css";

// eslint-disable-next-line react/prop-types
const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="body">
      <div className="searchBox">
        <input
          className="searchInput"
          type="text"
          name=""
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
          required
        />
        <button className="searchButton" onClick={handleSearch}>
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
};

export default Search;

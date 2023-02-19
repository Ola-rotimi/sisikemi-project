import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

import "./search.styles.scss";

const Search = () => {
  const [isActive, setIsActive] = useState(false);
  const [query, setQuery] = useState("");

  function handleIconClick() {
    setIsActive(true);
  }

  function handleInputChange(event) {
    setQuery(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Handle search submission here
    console.log(`Search query submitted: ${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div
        className={`search-container ${isActive ? "active" : ""}`}
        onClick={handleIconClick}
      >
        <CiSearch className="search-icon" />
        <input
          type="search"
          value={query}
          onChange={handleInputChange}
          placeholder="Search"
          className="search-input"
        />
        
      </div>
        {isActive && (
          <RxCross2
            className="close-button"
            onClick={() => setIsActive(false)}
          />
        )}
    </form>
  );
};

export default Search;

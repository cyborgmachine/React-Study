import React from "react";

const SearchBar = ({ value, onChange }) => {
  return (
    <form className="d-flex p-1" role="search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={onChange}
        value={value}
      />
      {/* <button className="btn btn-outline-primary" type="submit">
        Search
      </button> */}
    </form>
  );
};

export default SearchBar;

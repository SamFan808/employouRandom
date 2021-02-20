import React from "react";
import "./style.css";

function Search({ value, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search</label>
        <input
          onChange={handleInputChange}
          value={value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for an employee by name"
          id="search"
        />
        <br />
        <button onClick={handleFormSubmit} className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );
}

export default Search;

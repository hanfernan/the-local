import React from "react";

function Searchbar(props) {
  return (
    <div className="form-outline m-4">
      <input
        value={props.search}
        onChange={props.handleChange}
        name="bandSearch"
        type="text"
        id="form1"
        className="form-control col-6 m-auto"
        placeholder="Search bands"
        aria-label="Search"
      />
    </div>
  );
}

export default Searchbar;

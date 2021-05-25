import React, { Component } from "react";

class Searchbar extends Component {
  // Sets the component's initial state
  state = {
    search: "",
  };

  handleInputChange = (event) => {
    // Grabs the value of the user's input
    const { value } = event.target;
    this.props.onSearchCallback(value);
    this.setState({ search: value });
  };

  render() {
    return (
      <div className="form-outline m-4">
        <input
          value={this.state.search}
          onChange={this.handleInputChange}
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
}

export default Searchbar;

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
          name="employeeSearch"
          type="text"
          id="form1"
          className="form-control"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
    );
  }
}

export default Searchbar;

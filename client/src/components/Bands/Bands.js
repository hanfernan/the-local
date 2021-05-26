import React, { Component } from "react";
import SearchBar from "../Searchbar/Searchbar";
import ResultsTable from "../ResultsTable/ResultsTable";
import API from "../../utils/API";

let resArray;

class Bands extends Component {
  state = {
    search: "",
    results: [],
    ascending: true,
  };

  // Make api call and exclude unwanted data
  componentDidMount() {
    API.getBands()
      .then((response) => {
        console.log("response", response.data);
        resArray = response.data.map((band) => {
          return {
            name: band.band_name,
            city: band.location.location_name,
            genre: band.genre.genre_name,
            id: band.id,
          };
        });
        console.log("hello", resArray);

        this.setState({ results: resArray });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleChange = (event) => {
    // Grabs the value of the user's input
    const key = event.target.value;
    const filtered = resArray.filter((entry) =>
      Object.values(entry).some(
        (val) =>
          typeof val === "string" &&
          val.toLowerCase().includes(key.toLowerCase())
      )
    );

    this.setState({
      search: event.target.value,
      results: filtered,
    });
  };

  // sortBy = (key) => {
  //   if (this.state.ascending === true) {
  //     const sortUp = this.state.results.sort((a, b) =>
  //       a[key] < b[key] ? 1 : -1
  //     );
  //     this.setState({
  //       results: sortUp,
  //       ascending: false,
  //     });
  //   } else {
  //     const sortDown = this.state.results.sort((a, b) =>
  //       a[key] > b[key] ? 1 : -1
  //     );
  //     this.setState({
  //       results: sortDown,
  //       ascending: true,
  //     });
  //   }
  // };

  render() {
    return (
      <div>
        <SearchBar
          search={this.state.search}
          handleChange={this.handleChange}
        />
        <ResultsTable results={this.state.results} sortBy={this.sortBy} />
      </div>
    );
  }
}

export default Bands;

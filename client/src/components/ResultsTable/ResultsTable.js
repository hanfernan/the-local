import React, { Component } from "react";
// import API from "../utils/API";
export default class ResultsTable extends Component {
  state = {
    employees: [],
  };
  filteredBands = [];

  // componentDidMount() {
  //   API.getBands().then((res) => {
  //     // maps through the employee data
  //     const bandData = res.data.results.map((band) => {
  //       return band;
  //     });
  //     this.setState({ band: bandData });
  //   });
  // }

  // componentDidUpdate() {
  //   const filtered = this.state.bands.filter((band) => {
  //     return band.band_name
  //       .toLowerCase()
  //       .includes(this.props.searchData.toLowerCase());
  //   });
  //   this.filteredBands = filtered;
  // }

  render() {
    return (
      <table className="table col-10 m-auto">
        <thead>
          <tr>
            <th scope="col">Band Name</th>
            <th scope="col">City</th>
            <th scope="col">Genre</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Rookies</td>
            <td>Chicago, IL</td>
            <td>Indie Rock</td>
          </tr>
        </tbody>
        {/* <tbody>
        {props.bands &&
          props.bands.length &&
          props.bands.map((band, i) => (
            <Band key={`band-${i}`} band={band} />
          ))}
      </tbody> */}
      </table>
    );
  }
}

const Band = ({ band }) => {
  return (
    <tr>
      <td>{band.band_name}</td>
      <td>{band.location_id}</td>
      <td>{band.genre_id}</td>
    </tr>
  );
};

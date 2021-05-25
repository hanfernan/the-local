import React from "react";

function ResultsTable(props) {
  const bands = props.results.map((band, i) => {
    return (
      <tr key={i}>
        <td>{band.name}</td>
        <td>{band.city}</td>
        <td>{band.genre}</td>
      </tr>
    );
  });

  return (
    <table className="table col-10 m-auto">
      <thead>
        <tr>
          <th scope="col">Band Name</th>
          <th scope="col">City</th>
          <th scope="col">Genre</th>
        </tr>
      </thead>
      <tbody>{bands}</tbody>
    </table>
  );
}

export default ResultsTable;

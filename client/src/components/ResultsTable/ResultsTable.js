import React from "react";

function ResultsTable(props) {
  return (
    <table className="table col-10 m-auto">
      <thead>
        <tr>
          <th scope="col">Band Name</th>
          <th scope="col">City</th>
          <th scope="col">Genre</th>
        </tr>
      </thead>
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

const bands = props.results.map((band, i) => {
  return (
      <tr key={i}>
          <th scope = "row"><img src={person.image} alt="person"/></th>
          <td>{person.name}</td>
          <td>{person.phone}</td>
          <td>{person.email}</td>
          <td>{person.dob}</td>

      </tr>
  )
})
return (
  <table className="table table-striped">
      <thead>
          <tr>
              <th scope="col">Image</th>
              <th scope="col" onClick={() => props.sortBy('name')}>Name &#8597;</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col" onClick={() => props.sortBy('age')}>D.O.B &#8597;</th>
          </tr>
      </thead>
      <tbody>
          {people}
      </tbody>
  </table>
)
}



export default ResultsTable;

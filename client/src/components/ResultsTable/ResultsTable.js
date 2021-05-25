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
      <tbody>
        <tr>
          <td>The Rookies</td>
          <td>Chicago, IL</td>
          <td>Indie Rock</td>
        </tr>
      </tbody>
      {/* <tbody>
        {props.employees &&
          props.employees.length &&
          props.employees.map((employee, i) => (
            <Employee key={`employee-${i}`} employee={employee} />
          ))}
      </tbody> */}
    </table>
  );
}

// const Employee = ({ employee }) => {
//   return (
// <tr>
//   <th scope="row">
//     <img
//       src={employee.picture.large}
//       alt={`${employee.name.first} ${employee.name.last}`}
//     ></img>
//   </th>
//   <td>{`${employee.name.first} ${employee.name.last}`}</td>
//   <td className="text-justify">{employee.phone}</td>
//   <td>
//     <a href="mailto: Otto@gmail.com">{employee.email}</a>
//   </td>
// </tr>
//   );
// };

export default ResultsTable;

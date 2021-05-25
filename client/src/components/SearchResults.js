import React from "react";

function SearchResults(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Band Name</th>
          {/* <th scope="col">
            <button className="nameBtn" onClick={props.sortEmployeeCallback}>
              Name
            </button>
          </th> */}
          <th scope="col">City</th>
          <th scope="col">Genre</th>
        </tr>
      </thead>
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
//     <tr>
//       <th scope="row">
//         <img
//           src={employee.picture.large}
//           alt={`${employee.name.first} ${employee.name.last}`}
//         ></img>
//       </th>
//       <td>{`${employee.name.first} ${employee.name.last}`}</td>
//       <td className="text-justify">{employee.phone}</td>
//       <td>
//         <a href="mailto: Otto@gmail.com">{employee.email}</a>
//       </td>
//     </tr>
//   );
// };

export default SearchResults;

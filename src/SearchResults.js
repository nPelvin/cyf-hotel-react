import React from "react";

function SearchResults(prop) {
  console.log(prop.results[1].id);

  const tableData = prop.results.map(x => (
    <tr>
      <th scope="row">{x.id}</th>
      <td>{x.title}</td>
      <td>{x.firstName}</td>
      <td>{x.surname}</td>
      <td>{x.email}</td>
      <td>{x.roomID}</td>
      <td>{x.checkInDate}</td>
      <td>{x.checkOutDate}</td>
    </tr>
  ));
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">FirstcName</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room ID</th>
          <th scope="col">Check In Date</th>
          <th scope="col">Check Out Date</th>
        </tr>
      </thead>
      <tbody>{tableData}</tbody>
    </table>
  );
}

export default SearchResults;

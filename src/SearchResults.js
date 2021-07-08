import React from "react";
import Guest from "./Guest";
import moment from "moment";
moment().format();

function SearchResults(prop) {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room ID</th>
          <th scope="col">Check In Date</th>
          <th scope="col">Check Out Date</th>
          <th scope="col">Nights Staying</th>
          <th scope="col">Show Profile</th>
        </tr>
      </thead>
      <tbody>
        {prop.results.map(guest => (
          <Guest guest={guest} />
        ))}
      </tbody>
    </table>
  );
}

export default SearchResults;

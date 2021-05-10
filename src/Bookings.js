import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  //   const search = searchVal => {
  //     console.info("TO DO!", searchVal);
  //   };

  const [bookings, setBookings] = useState([]);
  const [submitForm, setSubmitForm] = useState("");

  function callbackFunction(data) {
    setBookings(data);
  }

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(data => {
        callbackFunction(data);
      });
  }, []);

  return (
    <div>
      {bookings ? (
        <div className="App-content">
          <div className="container">
            <Search setSubmitForm={setSubmitForm} />
            <SearchResults
              results={bookings.filter(
                guest =>
                  guest.firstName
                    .toUpperCase()
                    .includes(submitForm.toUpperCase()) ||
                  guest.surname.toUpperCase().includes(submitForm.toUpperCase())
              )}
            />
          </div>
        </div>
      ) : (
        <span>loading</span>
      )}
    </div>
  );
};

export default Bookings;

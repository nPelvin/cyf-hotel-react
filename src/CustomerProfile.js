import React, { useState, useEffect } from "react";

function CustomerProfile({ id }) {
  const [profile, setProfile] = useState({
    id: "",
    email: "",
    VIP: "",
    phoneNumber: ""
  });
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(response => response.json())
      .then(data => setProfile(data));
  }, []);
  console.log(profile);

  return (
    <div>
      {`Customer ID: ${profile.id}`}
      <br />
      {`Customer Email: ${profile.email}`}

      <br />
      {`VIP: ${profile.vip}`}

      <br />
      {`Phone Number: ${profile.phoneNumber}`}

      <br />
    </div>
  );
}

export default CustomerProfile;

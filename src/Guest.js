import React, { useState } from "react";
import moment, { diff } from "moment";

const Guest = x => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <tr
      className={isSelected ? "highlighted" : "not_highlighted"}
      onClick={() => setIsSelected(!isSelected)}
    >
      <th scope="row">{x.guest.id}</th>
      <td>{x.guest.title}</td>
      <td>{x.guest.firstName}</td>
      <td>{x.guest.surname}</td>
      <td>{x.guest.email}</td>
      <td>{x.guest.roomID}</td>
      <td>{x.guest.checkInDate}</td>
      <td>{x.guest.checkOutDate}</td>
      <td>
        {moment(x.guest.checkOutDate).diff(moment(x.guest.checkInDate), "days")}
      </td>
    </tr>
  );
};

export default Guest;

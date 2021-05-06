import React from "react";

function RestaurantButton(prop) {
  return (
    <button onClick={prop.onClick} className="btn btn-primary">
      Add
    </button>
  );
}

export default RestaurantButton;

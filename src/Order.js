import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

function Order(prop) {
  const [orders, setOrdersCount] = useState(0);

  function orderOne() {
    setOrdersCount(orders + 1);
  }

  return (
    <li>
      {prop.orderType}: {orders} <RestaurantButton onClick={orderOne} />
    </li>
  );
}

export default Order;

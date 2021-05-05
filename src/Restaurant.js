import React, { useState } from "react";

const Restaurant = () => {
  const [pizzas, setPizzaCount] = useState(0);

  function incrementPizzaCount() {
    setPizzaCount(pizzas + 1);
  }

  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {pizzas}{" "}
          <button onClick={incrementPizzaCount} className="btn btn-primary">
            Add
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;

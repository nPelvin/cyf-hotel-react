import React from "react";

function Footer(prop) {
  const newMap = prop.details.map(x => <li>{x}</li>);
  console.log(newMap);
  return (
    <footer>
      <div>
        <ul>{newMap}</ul>
      </div>
    </footer>
  );
}

export default Footer;

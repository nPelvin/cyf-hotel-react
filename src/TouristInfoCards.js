import React from "react";
function TouristInfoCards() {
  return (
    <div className="cardWrapper">
      <div className="glasgow">
        <img
          src="https://www.visitbritain.com/sites/default/files/consumer/paragraphs-bundles/image-header-with-text/glasgow_clyde_arc_vb34161123.jpg"
          alt="Glasgow City"
        />
        <h2>
          <a href="http://peoplemakeglasgow.com">Visit Glasgow</a>
        </h2>
      </div>
      <div className="manchester">
        <img
          src="https://www.visitbritain.com/sites/default/files/consumer/paragraphs-bundles/image-header-with-text/manchester_town_hall_ve13463_1200x600_0_1_0_0.jpg"
          alt="Manchester City"
        />
        <h2>
          <a href="http://visitmanchester.com">Visit Manchester</a>
        </h2>
      </div>

      <div className="london">
        <img
          src="https://london.ac.uk/sites/default/files/styles/max_1300x1300/public/2018-10/london-aerial-cityscape-river-thames_1.jpg?itok=6LenFxuz"
          alt="London City"
        />
        <h2>
          <a href="http://visitlondon.com">Visit London</a>
        </h2>
      </div>
    </div>
  );
}

export default TouristInfoCards;

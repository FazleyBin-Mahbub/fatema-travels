import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Cart from "../Cart/Cart";
import "./Home.css";
const Home = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/packages")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);
  return (
    <div className="">
      <div className="top-banner">
        <h1>Search Your Next Holiday</h1>
        <p>CHECK OUR BEST PROMOTIONS</p>
        <input type="text" placeholder="Choose your Destination" />
      </div>

      <h1 className="destination-title">Our Destination</h1>

      <div className="destination">
        <div className="destination-bangladesh">
          <h1>Bangladesh</h1>
        </div>
        <div className="destination-asia">
          <h1>Asia</h1>
        </div>
        <div className="destination-europe">
          <h1>Europe</h1>
        </div>
        <div className="destination-italy">
          <h1>Italy</h1>
        </div>
        <div className="destination-singapore">
          <h1>Singapore</h1>
        </div>
        <div className="destination-thailand">
          <h1>Thailand</h1>
        </div>
      </div>
      {/* destination end  */}

      {/* holiday  */}
      <div className="next-holiday">
        <h1>Your Next Holiday</h1>
        <button>View All Packages</button>
      </div>
      {/* packages add  */}

      <h1 className="packages-title">Our Packages</h1>
      <div className="package-card container">
        <Row xs={1} md={3} className="g-4">
          {packages.map((pack) => (
            <Cart key={pack._id} package={pack} />
          ))}
        </Row>
      </div>
      {/* discover */}

      <div className="discover">
        <div className="discover-cities">
          <p>01. LAST MINUTE</p>
          <h1>Discover Cities</h1>
          <button>Details</button>
        </div>
        <div className="discover-nature">
          <p>02. PROMOTIONS</p>
          <h1>Discover Nature</h1>
          <button>Details</button>
        </div>
      </div>
    </div>
  );
};

export default Home;

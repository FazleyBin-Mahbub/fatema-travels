import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Cart from "../Cart/Cart";
import "./Home.css";
const Home = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/packages")
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

      {/* packages add  */}

      <h1 className="packages-title">Our Packages</h1>
      <div className="package-card container">
        <Row xs={1} md={3} className="g-4">
          {packages.map((pack) => (
            <Cart package={pack} />
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./PackageDetails.css";
const PackageDetails = () => {
  const { _id } = useParams();
  const [packageDetails, setPackageDetails] = useState({});

  // load all the data
  useEffect(() => {
    fetch(`http://localhost:5000/packages/${_id}`)
      .then((res) => res.json())
      .then((data) => setPackageDetails(data));
  }, []);

  return (
    <div>
      <div className="package-detail">
        <div className="col-md-6 col-sm-12 text-start package-tags">
          <h6 className="fw-bolder">{packageDetails?.name}</h6>
          <p className="text-muted fw-bolder">{packageDetails?.desc}</p>
          <Link to="/myorders">
            <button className="book-now-btn fw-bolder rounded-2">
              Book Now
            </button>
          </Link>
        </div>
        <div className="col-md-6 col-sm-12">
          <img className="packageDetail-img" src={packageDetails?.img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;

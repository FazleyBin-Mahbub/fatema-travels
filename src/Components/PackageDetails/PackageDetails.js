import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./PackageDetails.css";
const PackageDetails = () => {
  const { id } = useParams();
  const [packageDetails, setPackageDetails] = useState([]);
  const [singlePackageDetails, setSinglePackageDetails] = useState([]);
  // load all the data
  useEffect(() => {
    fetch("/packageDetails.json")
      .then((res) => res.json())
      .then((data) => setPackageDetails(data.packageDetail));
  }, []);

  // load sing data
  useEffect(() => {
    const showPackageDetail = packageDetails.find(
      (packageDetail) => packageDetail.id === id
    );
    setSinglePackageDetails(showPackageDetail);
  }, [packageDetails]);
  return (
    <div className="">
      <div className="package-detail">
        <div className="col-md-6 col-sm-12 text-start package-tags">
          <h6 className="fw-bolder">{singlePackageDetails?.name}</h6>
          <p className="text-muted fw-bolder">{singlePackageDetails?.desc}</p>
          <Link to="/myorders">
            <button className="book-now-btn fw-bolder rounded-2">
              Book Now
            </button>
          </Link>
        </div>
        <div className="col-md-6 col-sm-12">
          <img
            className="packageDetail-img"
            src={singlePackageDetails?.img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;

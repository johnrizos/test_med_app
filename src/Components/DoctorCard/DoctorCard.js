import React from "react";
import "./DoctorCard.css";
import blankUserImg from "./images/users/user.png";

const DoctorCard = (props) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={blankUserImg} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-title text-center">{props.name}</p>
          <p className="card-title text-center">{props.speciality}</p>
          <p className="card-title text-center">{props.experience} years experience</p>
          <p className="card-title text-center">Ratings {props.rating} years experience</p>

        </div>
          <a href="#" style={{ backgroundColor:"#4CAF50" }} className="btn btn-primary btn-lg btn-block">
          Book Appointment<br />
          No Booking Fee
          </a>
      </div>
    </>
  );
};

export default DoctorCard;

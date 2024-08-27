import React from "react";
import "./DoctorCard.css";
import blankUserImg from "./images/users/user.png";

const starImage  = <svg style={{ color: "#FFD700" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>;

const DoctorCard = (props) => {
  return (
    <>
      <div className="card pt-2 m-auto" style={{ width: "18rem" }}>
        <img src={blankUserImg} className="card-img-top d-block m-auto" style={{ maxWidth:"200px" }} alt="..." />
        <div className="card-body">
          <p className="card-title text-center">{props.name}</p>
          <p className="card-title text-center">{props.speciality}</p>
          <p className="card-title text-center">{props.experience} years experience</p>
          <p className="card-title text-center">Ratings: {props.rating ?  Array.from({ length: props.rating }).map((_, index) => (
            <span key={index}>{starImage}</span>
          )) : ""} </p>

        </div>
          <a href="#" className="btn btn-primary btn-lg btn-block book-cta">
          Book Appointment<br />
          No Booking Fee
          </a>
      </div>
    </>
  );
};

export default DoctorCard;

import React, { useState } from "react";
import "./AppointmentForm.css";
import blankUserImg from "../DoctorCard/images/users/user.png";
import { specialityListData } from "../FindDoctorSearch/doctorsData";

const AppointmentForm = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
  });
  // id: props.selectedDoctorId,

  const timeSlots = [];
  for (let i = 9; i <= 20; i++) {
    let hour = i;
    let period = 'AM';
  
    if (i >= 12) {
      period = 'PM';
      if (i > 12) {
        hour = i - 12;
      }
    } else if (i === 0) {
      hour = 12; // midnight case
    }
  
    const formattedHour = hour < 10 ? `0${hour}` : hour;
    timeSlots.push(`${formattedHour}:00 ${period}`);
  }

  const starImage = (
    <svg
      style={{ color: "#FFD700" }}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-star-fill"
      viewBox="0 0 16 16"
    >
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  );
  // setAppointmentbookings
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
   
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, such as sending data to an API
    console.log("Form Data Submitted:", formData);

    props.setAppointmentbookings((prev) => {
      return {
        ...prev,
        [props.selectedDoctorId]: formData,
      };
    });

    props.handleClose();

  };


  return (
    <div
      className="modal fade show d-block"
      tabIndex="1000"
      role="dialog"
      style={{ zIndex: 1000 }}
    >
      <div
        className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
        role="document"
      >
        <div className="modal-content w-100">
          <div className="modal-header">
          {!props.isBookedAppointmentModal ? ( <h5 className="modal-title">Book an Appointment</h5>): (<h5 className="modal-title">Cancel Appointment</h5>)}
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={props.handleClose}
            ></button>
          </div>
          <div className="modal-body">
            <div className="appointment-form">
              <div className="doctor-info">
                <img
                  src={blankUserImg}
                  className="card-img-top d-block m-auto pb-3"
                  style={{ maxWidth: "100px" }}
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-title text-center fw-bold">
                    {props.doctorAppointment.name}
                  </p>
                  <p className="card-title text-center">
                    {specialityListData[props.doctorAppointment.specialist]}
                  </p>
                  <p className="card-title text-center">
                    {props.doctorAppointment.experience} years experience
                  </p>
                  <p className="card-title text-center">
                    Ratings:{" "}
                    {props.doctorAppointment.rating
                      ? Array.from({
                          length: props.doctorAppointment.rating,
                        }).map((_, index) => (
                          <span key={index}>{starImage}</span>
                        ))
                      : ""}{" "}
                  </p>
                </div>
              </div>
              {!props.isBookedAppointmentModal ? (
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone Number:
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-control"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="date" className="form-label">
                    Date of Appointment:
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="form-control"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="time" className="form-label">
                    Book Time Slot:
                  </label>
                  <select
                    id="time"
                    name="time"
                    className="form-select"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Select a time slot
                    </option>
                    {timeSlots.map((slot, index) => (
                      <option key={index} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>

                <button type="submit" className="btn btn-primary">
                  Book now
                </button>
              </form>): (<><p className="card-title text-center">Name: {props.appointmentbookings.name}</p><p className="card-title text-center">Phone Number: {props.appointmentbookings.phone}</p><p className="card-title text-center">Date of Appointment: {props.appointmentbookings.date}</p><p className="card-title text-center">Time Slot: {props.appointmentbookings.time}</p>                <button type="submit" onClick={()=>{props.cancelAppointment(props.selectedDoctorId);props.handleClose();props.setIsBookedAppointmentModal()}} className="btn btn-danger">
              Cancel Appointment

                </button></>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;

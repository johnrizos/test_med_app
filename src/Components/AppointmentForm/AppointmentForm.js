import React from "react";
import "./AppointmentForm.css";

const AppointmentForm = (props) => {
  const timeSlots = [];
  for (let i = 9; i <= 20; i++) {
    const hour = i < 10 ? `0${i}` : i;
    timeSlots.push(`${hour}:00`);
  }

  return (
    <div className="modal fade show d-block z-n1" tabIndex="1000" role="dialog">
      <div
        className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
        role="document"
      >
        <div className="modal-content w-100">
          <div className="modal-header">
            <h5 className="modal-title">Book an Appointment</h5>
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
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
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
                    required
                  >
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;

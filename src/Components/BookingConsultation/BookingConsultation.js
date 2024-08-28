import React from "react";
import FindDoctorSearch from "../FindDoctorSearch/FindDoctorSearch";

const BookingConsultation = (props) => {

    const  appointmentbookings=props.appointmentbookings;
    const setAppointmentbookings=props.setAppointmentbookings

    return (
        <div className="booking-consultation">
        <div className="booking-consultation__container">
            <FindDoctorSearch setAppointmentbookings={setAppointmentbookings} appointmentbookings={appointmentbookings} />
        </div>
        </div>
    );
    };

export default BookingConsultation;
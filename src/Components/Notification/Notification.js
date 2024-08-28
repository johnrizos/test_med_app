import React, { useEffect, useState } from "react";
import {doctors,specialityListData} from "../FindDoctorSearch/doctorsData";

const Notifications = (props) => {

    // Check if props changed and console log
    useEffect(() => {
        console.log("props changed", props.appointmentbookings);
    }, [props.appointmentbookings]);

    // Extract the first appointment object
    const appointmentObject = Object.values(props.appointmentbookings || {})[0];

    // Destructure the properties from the appointment object
    const nameClient = appointmentObject?.name || "N/A";
    const phoneClient = appointmentObject?.phone || "N/A";
    const dateClient = appointmentObject?.date || "N/A";
    const timeClient = appointmentObject?.time || "N/A";

    return (
        <div
            id="notificationToast"
            className="toast align-items-center text-white bg-primary border-0 position-fixed bottom-0 end-0 p-2 m-2 show"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
        >
            <div className="d-flex">
                <div className="toast-body">
                    <h3>Appointment Details</h3>
                    <p>Doctor: {doctors[Object.keys(props.appointmentbookings)[0]].name}</p>
                    <p>Speciality: {specialityListData[doctors[Object.keys(props.appointmentbookings)[0]].specialist]}</p>
                    <p>Name: {nameClient}</p>
                    <p>Phone Number: {phoneClient}</p>
                    <p>Date of Appointment: {dateClient}</p>
                    <p>Time Slot: {timeClient}</p>
                </div>
                {/* <button
                    type="button"
                    className="btn-close btn-close-white me-2 m-auto"
                    data-bs-dismiss="toast"
                    aria-label="Close"
                ></button> */}
            </div>
        </div>
    );
};

export default Notifications;

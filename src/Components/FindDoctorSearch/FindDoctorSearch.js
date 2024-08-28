import React, { useState, useEffect } from "react";
import "./FindDoctorSearch.css";
import consulting from "./images/consulting.png";
import DoctorCard from "../DoctorCard/DoctorCard";
import AppointmentForm from "../AppointmentForm/AppointmentForm";
import {doctors,specialityListData} from "./doctorsData";

const FindDoctorSearch = (props) => {

  const [selectedDoctorId, setSelectedDoctorId] = useState(null);

  const [doctorsFilter, setDoctorsFilter] = useState({});

  const  appointmentbookings= props.appointmentbookings;
  const setAppointmentbookings= props.setAppointmentbookings;

  const [isBookedAppointmentModal, setIsBookedAppointmentModal] = useState(false);



  const doctorAppointment = (doctorId) => {
    console.log("doctor", Object.keys(doctors).find(key => key === doctorId) 
    ? doctors[doctorId] 
    : null);
    return Object.keys(doctors).find(key => key === doctorId) 
      ? doctors[doctorId] 
      : null;
  };

  const cancelAppointment = (doctorId) => {
    console.log("doctorId",doctorId);
    const newAppointmentbookings = {...appointmentbookings};
    delete newAppointmentbookings[doctorId];
    setAppointmentbookings(newAppointmentbookings);
  }
  

  const findDoctorFromSpeciality = (doctors,speciality) => {
    console.log("speciality",speciality);

    setSpecialitySearchInput(specialityListData[speciality]);


    
    const doctorsFilter = Object.fromEntries(
      Object.entries(doctors).filter(([key, value]) => Number(value.specialist) === Number(speciality))
    );
    console.log("doctorsFilter",doctorsFilter);
    
    setDoctorsFilter(doctorsFilter);
    onChangeSpecialitySearchInput(specialityListData[speciality], specialityListData);
  };


  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const [listFlag, setListFlag] = useState(false);

  let timeoutFlag = true;
  const handleListFlag = () => {
    if (!timeoutFlag) return;
    timeoutFlag = false;
    setTimeout(() => {
      setListFlag(!listFlag);
      timeoutFlag = true;
    }
    , 200);};

  const [specialitySearchInput, setSpecialitySearchInput] = useState("");
  const [specialityList, setSpecialityList] = useState(specialityListData);
  const onChangeSpecialitySearchInput = (textInput, list) => {
    console.log("change working");
    
    const currentData = Object.fromEntries(
      Object.entries(list).filter(([key, value]) =>
        list[key].toLowerCase().includes(textInput.toLowerCase())
      )
    );
    console.log("currentData",currentData);
    setSpecialityList(currentData);
  };

  // I want to return true or false if the doctor has an appointment
  const checkAppointment = (doctorId) => {
    return Object.keys(appointmentbookings).find(
      (key) => key === doctorId
    )
      ? true
      : false;
  }

  useEffect(() => {
    console.log("Updated appointmentbookings:", appointmentbookings);
  }, [appointmentbookings]); // This effect will run when the appointmentbookings state changes

  return (
    <>
      <div className="container">
        <section className="section-find-doctor">
          <div className="section-find-doctor container">
            <div>
              <h1>Find Doctor Search</h1>
            </div>
            <img
              style={{ textAlign: "center", display: "block", margin: "auto",maxWidth:"100%" }}
              src={consulting}
              alt="doctor"
            />

            <div className="search-doctor">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  style={{ lineHeight: "2.5" }}
                  placeholder="Search doctors by Speciality"
                  aria-label="Search doctors by Speciality"
                  aria-describedby="basic-addon2"
                  value={specialitySearchInput}
                  onClick={handleListFlag}
                  onBlur={handleListFlag}
                  onChange={(e) => {
                    setSpecialitySearchInput(e.target.value);
                    onChangeSpecialitySearchInput(
                      e.target.value,
                      specialityListData
                    );
                  }}
                />
                <span className="input-group-text" id="basic-addon2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                </span>
              </div>
              {listFlag && (
                <div className="search-doctor-list border border-2 ">
                  <ul className="p-0 m-0">
                    {Object.keys(specialityList).map((key) => (
                      <li
                        className="border-bottom  border-1 p-2"
                        value={specialityList[key]}
                        key={key}
                        onClick={() => findDoctorFromSpeciality(doctors,key)
                        }
                      >
                        {specialityList[key]}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
        <section className="mt-4">
          <p className="text-center">8 doctors available in</p>
          <p className="text-center">
            {" "}
            Book appointments with minimum walt-time &verified doctor details
          </p>
        </section>
        <section className="mt-4">
          <div className="row justify-content-md-center">
              {Object.keys(doctorsFilter).map((key) => (
            <div className="col-md-3 col-12 col my-3" key={key}>
                <DoctorCard
                  name={doctors[key].name}
                  speciality={specialityListData[doctors[key].specialist]}
                  experience={doctors[key].experience}
                  rating={doctors[key].rating}
                  image=""
                  doctorId={key}
                  setSelectedDoctorId={setSelectedDoctorId}
                  handleShow={handleShow}
                  checkAppointment={checkAppointment(key)}
                  setIsBookedAppointmentModal={setIsBookedAppointmentModal}
                  
                                   
                />
            </div>
              ))}
          </div>
        </section>
      </div>
      {showModal && (
      <AppointmentForm 
      setAppointmentbookings={setAppointmentbookings} 
      doctorAppointment={doctorAppointment(selectedDoctorId)} 
      selectedDoctorId={selectedDoctorId} 
      appointmentbookings={appointmentbookings[selectedDoctorId] ? appointmentbookings[selectedDoctorId] : null}
      handleClose={handleClose} 
      isBookedAppointmentModal = {isBookedAppointmentModal}
      setIsBookedAppointmentModal={setIsBookedAppointmentModal}
      cancelAppointment={cancelAppointment} />
      )}
    </>
  );
};

export default FindDoctorSearch;

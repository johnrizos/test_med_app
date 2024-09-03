// Import components for routing from react-router-dom library
import React,{useState,useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import custom Navbar component
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Login from './Components/Login/Login';
import Sign_Up from './Components/Sign_Up/Sign_Up';
// import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch';
import BookingConsultation from './Components/BookingConsultation/BookingConsultation';
import Notification from './Components/Notification/Notification';
import ReviewForm from './Components/ReviewForm/ReviewForm';
import ProfileCard from './Components/ProfileCard/ProfileCard';
import ReportsLayout from './Components/ReportsLayout/ReportsLayout';


import './App.css';

function App() {

  const [showNotification, setShowNotification] = useState(false);
  // const [appointmentbookings, setAppointmentbookings] = useState({});
  const [appointmentbookings, setAppointmentbookings] = useState(() => {
    const savedBookings = localStorage.getItem("appointmentbookings");
    return savedBookings ? JSON.parse(savedBookings) : {};
  });

  // check if exist appointmentbookings and set them in local storage if exist update the state appointmentbookings
  useEffect(() => {
    if (localStorage.getItem("appointmentbookings")) {
      setAppointmentbookings(JSON.parse(localStorage.getItem("appointmentbookings")));
    }
  }, []);

  // update the local storage when the appointmentbookings state changes
  useEffect(() => {
    console.log("appointmentbookings", appointmentbookings);
    
    localStorage.setItem("appointmentbookings", JSON.stringify(appointmentbookings));
  }, [appointmentbookings]);


  // check if the appointmentbookings object is empty and set the showNotification state accordingly
  useEffect(() => {
    if (Object.keys(appointmentbookings).length === 0) {
      setShowNotification(false);
    } else {
      setShowNotification(true);
    }
  }, [appointmentbookings]);

  return (
    <>
        {/* Set up BrowserRouter for routing */}
        <BrowserRouter>
          {/* Display the Navbar component */}
          <Navbar/>
          {/* Set up the Routes for different pages */}

          <Routes>
            {/* Define individual Route components for different pages */}
            <Route path="/" element={<Landing_Page/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Sign_Up/>}/>
            <Route path="find-doctor" element={<BookingConsultation appointmentbookings={appointmentbookings} setAppointmentbookings={setAppointmentbookings}/>}/>
            <Route path="reviews" element={<ReviewForm appointmentbookings={appointmentbookings}/>}/>
            <Route path="profile" element={<ProfileCard/>}/>
            <Route path="reports" element={<ReportsLayout appointmentbookings={appointmentbookings}/>}/>


          </Routes>
        { showNotification ? <Notification appointmentbookings={appointmentbookings}/> : "" }
        </BrowserRouter>
    </>
  );
}

export default App;

// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import custom Navbar component
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Login from './Components/Login/Login';
import Sign_Up from './Components/Sign_Up/Sign_Up';
// import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch';
import BookingConsultation from './Components/BookingConsultation/BookingConsultation';


import './App.css';

function App() {
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
            <Route path="find-doctor" element={<BookingConsultation/>}/>


          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;

import React, { useState } from "react";
import "./FindDoctorSearch.css";
import consulting from "./images/consulting.png";

const FindDoctorSearch = () => {
  const specialityListData = {1: "Cardiologist",2: "Dermatologist",3: "Dentist",4: "Gynecologist",5: "Neurologist",6: "Orthopedic",7: "Pediatrician",8: "Psychiatrist",9: "Urologist",};
  const handleSpeciality = (e) => {
    console.log(e.target.value);
  };
  const handleSearch = (e) => {
    console.log(e.target.value);
  };
  
  const [listFlag, setListFlag] = useState(false);

  const handleListFlag = () => {
    setListFlag(!listFlag);
    };


  const [specialitySearchInput, setSpecialitySearchInput] = useState("");
  const [specialityList, setSpecialityList] = useState(specialityListData);
  const onChangeSpecialitySearchInput = (textInput, list) => {
    const currentData = Object.fromEntries(
      Object.entries(list).filter(([key, value]) =>
        list[key].toLowerCase().includes(textInput.toLowerCase())
      )
    );
    console.log(currentData);
    setSpecialityList(currentData);
  };

  return (
    <>
      <div className="container">
        <section className="section-find-doctor">
          <div className="section-find-doctor container">
            <div>
              <h1>Find Doctor Search</h1>
            </div>
            <img
              style={{ textAlign: "center", display: "block", margin: "auto" }}
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                </span>
              </div>
{listFlag && (
              <div className="search-doctor-list border border-2 ">
                <ul className="p-0 m-0">
                  { Object.keys(specialityList).map((key) => (
                    <li
                      className="border-bottom  border-1 p-2"
                      value={specialityList[key]}
                      key={key}
                      onClick={() => console.log(specialityList[key])}
                    >
                      {specialityList[key]}
                    </li>
                  ))}
                </ul>

              </div> )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FindDoctorSearch;

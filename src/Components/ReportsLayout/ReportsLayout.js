import React, { useState } from 'react';
import "./ReportsLayout.css";
import { doctors, specialityListData } from '../FindDoctorSearch/doctorsData';

const ReportsLayout = (props) => {

    // reviews useState local storage with name review and rating to check if exist local storage or not
    const [reviews, setReviews] = useState((JSON.parse(localStorage.getItem("reviews")) || {}));

    console.log("reviews", reviews);
    console.log("reviews", reviews[5]);
    
    // Function to download the PDF from the public folder
    const downloadPdf = (e) => {
        e.preventDefault();
        window.location.href = "/medical_reports/patient_report.pdf";
    }

    // Function to view the PDF in a new tab from the public folder
    const viewPdf = (e) => {
        e.preventDefault();
        window.open("/medical_reports/patient_report.pdf", "_blank");
    }

    const appointmentbookings = props.appointmentbookings;
    // display hide review form
    const [showForm, setShowForm] = useState(false);
    // on click of give review button

    const [doctorId, setDoctorId] = useState(null);

    return (
        <div className="container mt-5" style={{ paddingTop: "80px" }}>
            <h1 className="text-start mb-4">Reports</h1>
            <table className="table">
                <thead style={{ background: "#D9D9D9" }}>
                    <tr>
                        <th className='text-center'>S.No.</th>
                        <th className='text-center'>Doctor Name</th>
                        <th className='text-center'>Doctor Speciality</th>
                        <th className='text-center'>View Report</th>
                        <th className='text-center'>Download Report</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(appointmentbookings).map((key, index) => {
                        return (
                            <tr key={key}>
                                <td className='text-center'>{index + 1}</td>
                                <td className='text-center'>{doctors[key]["name"]}</td>
                                <td className='text-center'>{specialityListData[doctors[key]["specialist"]]}</td>
                                <td className='text-center'><button className="btn btn-primary btn-sm" style={{ maxWidth: "200px" }} onClick={viewPdf}>View Report</button></td> 
                                <td className='text-center'><button className="btn btn-primary btn-sm" style={{ maxWidth: "200px" }} onClick={downloadPdf}>Download Report</button></td> 
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ReportsLayout;

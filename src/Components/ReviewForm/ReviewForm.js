import React,{useState} from 'react';
import "./ReviewForm.css";
import { doctors } from '../FindDoctorSearch/doctorsData';
import GiveReviews from '../GiveReviews/GiveReviews';

const ReviewForm = (props) => {

    // reviews useState local storage with name review and rating to check if exist local storage or not

    const [reviews, setReviews] = useState((JSON.parse(localStorage.getItem("reviews")) || {}));

    console.log("reviews", reviews);
    console.log("reviews", reviews[5]);
    



    const appointmentbookings = props.appointmentbookings;
    // display hide review form
    const [showForm, setShowForm] = useState(false);
    // on click of give review button
    const handleGiveReview = () => {
        setShowForm(true);
    };

    const [doctorId, setDoctorId] = useState(null);

    // review form data when clicked on give review button

    return (
        <div className="container mt-5" style={{paddingTop:"80px" }}>
            <h1 className="text-start mb-4">Reviews</h1>
            <table className="table">
                <thead style={{ background:"#D9D9D9" }}>
                    <tr>
                        <th className='text-center'>S.No.</th>
                        <th className='text-center'>Doctor Name</th>
                        <th className='text-center'>Doctor Provide Feedback</th>
                        <th className='text-center'>Review Given</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(appointmentbookings).map((key, index) => {
                        return (
                            <tr key={key}>
                                <td className='text-center'>{index + 1} </td>
                                <td className='text-center'>{doctors[key]["name"]}</td>
                                {reviews[key]?.review ? <td className='text-center'><button className="btn btn-secondary btn-sm" style={{ maxWidth:"200px" }}  disabled>Give Review</button></td> : <td className='text-center'><button className="btn btn-primary btn-sm" style={{ maxWidth:"200px" }} onClick={()=>{setShowForm(true);setDoctorId(key)}}>Give Review</button></td>}

                                <td className='text-center'>{reviews[key]?.review ? reviews[key]["review"] : "" }</td> 
                            </tr>
                        );
                    })}
                    {/* <tr>
                        <td className='text-center'>1</td>
                        <td className='text-center'>Dr. John Doe</td>
                        <td className='text-center'><button className="btn btn-primary btn-sm" style={{ maxWidth:"200px" }}>Give Review</button></td>
                        <td className='text-center'>Good</td>
                    </tr> */}

                </tbody>
            </table>
            {showForm ? <GiveReviews setShowForm={setShowForm} reviews={reviews} setReviews={setReviews} doctorId={doctorId} /> : null}
             

           
        </div>
    );
};
export default ReviewForm;


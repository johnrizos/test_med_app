import React, { useState } from "react";
import "./GiveReviews.css";



// Function component for Give Reviews form
const GiveReviews = (props) => {
  const [submittedMessage, setSubmittedMessage] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    review: '',
    rating: 1
  });


  const star = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>;
  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const reviews = props.reviews;
  const setReviews = props.setReviews;


  // Function to handle form submission
  const submitReview = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log("submitReview");
    console.log(formData);
    

    // save the review to local storage as object with doctorId as key but also to be a state so will change dynamically and also check the local storage if exist or not
    const doctorId = props.doctorId;
    const newReviews = { ...reviews, [doctorId]: formData };
    setReviews(newReviews);
    localStorage.setItem("reviews", JSON.stringify(newReviews));
    setSubmittedMessage('Review submitted successfully');
    setFormData({
      name: '',
      review: '',
      rating: 1
    });
    setShowWarning(false);
    props.setShowForm(false);

  };





  return (
    <div className="modal fade show d-block" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ zIndex: 1000 }}>
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content w-100">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Give Review</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>props.setShowForm(false)}></button>
          </div>
          <div className="modal-body">
            {submittedMessage && <div className="alert alert-success">{submittedMessage}</div>}
            {showWarning && <div className="alert alert-danger">Failed to submit review. Please try again.</div>}
            <form onSubmit={submitReview}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="review">Review</label>
                <textarea
                  id="review"
                  name="review"
                  value={formData.review}
                  onChange={handleInputChange}
                  required
                  className="w-100"
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="rating">Rating</label>
                <div className="rating">
                  <input
                    type="radio"
                    name="rating"
                    id="star5"
                    value={5}
                    checked={formData.rating === "5"}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="star5">{star}</label>

                  <input
                    type="radio"
                    name="rating"
                    id="star4"
                    value={4}
                    checked={formData.rating === "4"}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="star4">{star}</label>

                  <input
                    type="radio"
                    name="rating"
                    id="star3"
                    value={3}
                    checked={formData.rating === "3"}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="star3">{star}</label>

                  <input
                    type="radio"
                    name="rating"
                    id="star2"
                    value={2}
                    checked={formData.rating === "2"}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="star2">{star}</label>

                  <input
                    type="radio"
                    name="rating"
                    id="star1"
                    value={1}
                    checked={formData.rating === "1"}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="star1">{star}</label>
                </div>
              </div>
              <div className="modal-footer border border-0">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiveReviews;

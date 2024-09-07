import React, { useState, useEffect } from "react";
import "./ProfileCard.css";
import { API_URL } from "../../config";
import { useNavigate } from "react-router-dom";


const ProfileCard = () => {
  // Set up state variables using the useState hook
  const [userDetails, setUserDetails] = useState({});
  const [updatedDetails, setUpdatedDetails] = useState({});
  const [editMode, setEditMode] = useState(false);
  
  // Access the navigation functionality from React Router
  const navigate = useNavigate();
  
  // Use the useEffect hook to fetch user profile data when the component mounts or updates
  useEffect(() => {
    const authtoken = sessionStorage.getItem("auth-token");
    if (!authtoken) {
      navigate("/login");
    } else {
      fetchUserProfile();
    }
  }, [navigate]);
  // Function to fetch user profile data from the API
  const fetchUserProfile = async () => {
    try {
      const authtoken = sessionStorage.getItem("auth-token");
      const email = sessionStorage.getItem("email"); // Get the email from session storage
      if (!authtoken) {
        navigate("/login");
      } else {
        const response = await fetch(`${API_URL}/api/auth/user`, {
          headers: {
            "Authorization": `Bearer ${authtoken}`,
            "Email": email, // Add the email to the headers
          },
        });
        if (response.ok) {
        // if (true) {
          const user = await response.json();
          setUserDetails(user);
          setUpdatedDetails(user);
        } else {
          // Handle error case
          throw new Error("Failed to fetch user profile");
        }
      }
    } catch (error) {
      console.error(error);
      // Handle error case
    }
  };
  // Function to enable edit mode for profile details
  const handleEdit = () => {
    setEditMode(true);
  };
  // Function to update state when user inputs new data
  const handleInputChange = (e) => {
    setUpdatedDetails({
      ...updatedDetails,
      [e.target.name]: e.target.value,
    });
  };
  // Function to handle form submission when user saves changes
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const authtoken = sessionStorage.getItem("auth-token");
      const email = sessionStorage.getItem("email"); // Get the email from session storage
      if (!authtoken || !email) {
        navigate("/login");
        return;
      }
      const payload = { ...updatedDetails };
      const response = await fetch(`${API_URL}/api/auth/user`, {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${authtoken}`,
          "Content-Type": "application/json",
          "Email": email,
        },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        // Update the user details in session storage
        sessionStorage.setItem("name", updatedDetails.name);
        sessionStorage.setItem("phone", updatedDetails.phone);
        setUserDetails(updatedDetails);
        setEditMode(false);
        // Display success message to the user
        alert(`Profile Updated Successfully!`);
        navigate("/");
      } else {
        // Handle error case
        throw new Error("Failed to update profile");
      }
    } catch (error) {
      console.error(error);
      // Handle error case
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div
        className="card bg-white"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        {editMode === "view" ? (
          <>
            <div className="card-header text-center bg-white">
              <h3>Profile</h3>
            </div>
            <div className="card-body">
              <div className="text-center">
                <h4>Welcome, {userDetails.name}</h4>
                <p>
                  <strong>Email:</strong> {userDetails.email}
                </p>
                <p>
                  <strong>Phone:</strong> {userDetails.phone}
                </p>
              </div>
            </div>
            <div className="card-footer text-center bg-white">
              <button
                className="btn btn-primary"
                onClick={() => setEditMode("edit")}
              >
                Edit Profile
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="card-header text-center bg-white">
              <h3>Edit Profile</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3 text-start">
                  <label
                    htmlFor="email"
                    className="form-label mb-0 fw-bold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={updatedDetails.email}
                    onChange={handleInputChange}
                    disabled
                  />
                </div>
                <div className="mb-3 text-start">
                  <label
                    htmlFor="name"
                    className="form-label mb-0 fw-bold"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={updatedDetails.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3 text-start">
                  <label
                    htmlFor="phone"
                    className="form-label mb-0 fw-bold"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={updatedDetails.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;

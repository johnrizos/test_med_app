import React, { useState, useEffect } from "react";
import "./ProfileCard.css";
import { Link } from "react-router-dom";

const ProfileCard = () => {
  const [editMode, setEditMode] = useState("view");

  const storedEmail = sessionStorage.getItem("email") || "";
  const storedPhone = sessionStorage.getItem("phone") || "";
  const storedName = sessionStorage.getItem("name") || "";

  const [formData, setFormData] = useState({
    name: storedName,
    email: storedEmail,
    phone: storedPhone
  });

  useEffect(() => {
    setFormData({
      name: storedName,
      email: storedEmail,
      phone: storedPhone
    });
  }, [editMode, storedName, storedEmail, storedPhone]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update session storage
    sessionStorage.setItem("name", formData.name);
    sessionStorage.setItem("phone", formData.phone);

    // Switch back to view mode
    setEditMode("view");
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
                <h4>Welcome, {formData.name}</h4>
                <p>
                  <strong>Email:</strong> {formData.email}
                </p>
                <p>
                  <strong>Phone:</strong> {formData.phone}
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
                    value={formData.email}
                    onChange={handleChange}
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
                    value={formData.name}
                    onChange={handleChange}
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
                    value={formData.phone}
                    onChange={handleChange}
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

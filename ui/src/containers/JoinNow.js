import React, { useState } from 'react';
import './joinNow.css';

const JoinNow = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    joinDate: '',
    membershipType: 'basic',
    location: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/joinnow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Form submitted successfully!');
        setFormData({
          name: '',
          email: '',
          phoneNumber: '',
          joinDate: '',
          membershipType: 'basic',
          location: ''
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
    } catch (error) {
      console.error('Form submission error:', error.message);
      alert('Failed to submit form. Please try again.');
    }
  };

  return (
    <div className="join-now-container">
      <h2>Join Now</h2>
      <p>Ready to start your fitness journey with us? Sign up for a membership today!</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />

        <label htmlFor="joinDate">Join Date:</label>
        <input type="date" id="joinDate" name="joinDate" value={formData.joinDate} onChange={handleChange} required />

        <label htmlFor="membershipType">Membership Type:</label>
        <select id="membershipType" name="membershipType" value={formData.membershipType} onChange={handleChange} required>
          <option value="basic">Basic</option>
          <option value="premium">Premium</option>
          <option value="vip">VIP</option>
        </select>

        <label htmlFor="location">Location:</label>
        <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} required />

        <button type="submit" title="Click here to submit your data">Join Now</button>
      </form>
    </div>
  );
};

export default JoinNow;

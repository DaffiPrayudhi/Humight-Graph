import React, { useState } from 'react';

const InputModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    services: [],
    platforms: [],
    goals: '',
    budget: '',
    startDate: '',
    duration: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e, type) => {
    const { value, checked } = e.target;
    const updatedList = checked
      ? [...formData[type], value]
      : formData[type].filter((item) => item !== value);

    setFormData((prevState) => ({
      ...prevState,
      [type]: updatedList,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    onClose(); // Close the modal after submitting
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="conform">
          <h2>Contact Digital Agency</h2>
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <label>Company/Brand Name</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
            />

            <label>Services Needed</label>
            <div className="checkbox-group">
              {['Content creation', 'Social media management', 'Paid advertising', 'Influencer marketing', 'Analytics & reporting', 'Community management'].map((service, index) => (
                <label key={index}>
                  <input
                    type="checkbox"
                    value={service}
                    onChange={(e) => handleCheckboxChange(e, 'services')}
                    checked={formData.services.includes(service)}
                  />
                  {service}
                </label>
              ))}
            </div>

            <label>Social Media Platforms</label>
            <div className="checkbox-group">
              {['Instagram', 'Facebook', 'Twitter', 'LinkedIn', 'TikTok'].map((platform, index) => (
                <label key={index}>
                  <input
                    type="checkbox"
                    value={platform}
                    onChange={(e) => handleCheckboxChange(e, 'platforms')}
                    checked={formData.platforms.includes(platform)}
                  />
                  {platform}
                </label>
              ))}
            </div>

            <label>Primary Goals</label>
            <textarea
              name="goals"
              value={formData.goals}
              onChange={handleChange}
              required
            />

            <label>Budget Range</label>
            <input
              type="text"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
            />

            <label>Project Start Date</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
            />

            <label>Project Duration</label>
            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
            />

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InputModal;
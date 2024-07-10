import React, { useState } from 'react';
import './form.css';

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phNumber: '',
    selection: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="container-fluid mt-4 form-css" id='contact'>
      <div className="row justify-content-end">
        <div className="col-lg-8 d-flex ">
          <div className="card shadow" style={{ width: '100%', maxWidth: '400px' }}>
            <div className="card-body">
              <h2 className="card-title text-center"><b>Contact Us</b></h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3 input-div">
                  <label htmlFor="name" className="form-label">Name</label>
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
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phNumber" className="form-label">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phNumber"
                    name="phNumber"
                    value={formData.phNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="selection" className="form-label">Loan Type</label>
                  <select
                    className="form-select"
                    id="selection"
                    name="selection"
                    value={formData.selection}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Choose...</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
                <div className="mb-3 text-end">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

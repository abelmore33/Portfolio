import React, { useState } from "react";
import "../css/form.css";

const Form = () => {
  const [pageData, setPageData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPageData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div className="form">
      <h1>Form</h1>
      <form>
        <div className="inputs">
          <label htmlFor="name">
            <p>Name (Organization)</p>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Company Name"
            onChange={handleChange}
          />
        </div>
        <div className="inputs">
          <label htmlFor="email">
            <p>Email</p>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="nI8n6@example.com"
            onChange={handleChange}
          />
        </div>
        <div className="inputs">
          <label htmlFor="message">
            <p>Message</p>
          </label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="form-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;

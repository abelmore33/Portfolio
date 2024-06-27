import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import "../css/form.css";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name be at least 3 characters"),
  email: yup.string().email().required("Email is required"),
  message: yup
    .string()
    .required("Message is required")
    .min(5, "Must be at least 5 characters"),
});

const Form = () => {
  const [pageData, setPageData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const [disabled, setDisabled] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    schema.isValid(pageData).then((valid) => {
      setDisabled(!valid);
    });
  }, [pageData]);

  const setFormErrors = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setErrors({
          ...errors,
          [name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [name]: err.message,
        });
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormErrors(name, value);
    setPageData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setPageData({
      name: "",
      email: "",
      message: "",
    });

    axios
      .post("http://localhost:5000/api/users", pageData)
      .then((res) => {
        console.log(res);
        navigate("/thanks");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="form">
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
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
            value={pageData.name}
          />
          {errors.name && <p className="error">{errors.name}</p>}
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
            value={pageData.email}
          />
          {errors.email && <p className="error">{errors.email}</p>}
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
            value={pageData.message}
          ></textarea>
          {errors.message && <p className="error">{errors.message}</p>}
        </div>
        <button type="submit" className="form-btn" disabled={disabled}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;

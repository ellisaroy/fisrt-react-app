import React, { useState } from "react";

const Signup = () => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const handleFirstNameChange = (event) => {
    setValues({ ...values, firstname: event.target.value });
  };
  const handleLastNameChange = (event) => {
    setValues({ ...values, lastname: event.target.value });
  };
  const handleEmailChange = (event) => {
    setValues({ ...values, email: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.firstname && values.lastname && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };
  return (
    <>
      <h2>This is Signup Form</h2>
      <div className="register-form-wrap">
        <form className="register-form" onSubmit={handleSubmit}>
          {submitted && valid ? (
            <div
              className="success-message"
              style={{ color: "white", background: "green", width: "200px" }}
            >
              Thank you for form submission!
            </div>
          ) : null}
          <input
            type="text"
            value={values.firstname}
            name="firstname"
            placeholder="Enter your firstname"
            onChange={handleFirstNameChange}
          />
          {submitted && !values.firstname ? (
            <span class="validation" style={{ color: "red" }}>
              Please enter firstname
            </span>
          ) : null}
          <br></br>
          <input
            type="text"
            value={values.lastname}
            name="lastname"
            placeholder="Enter your lastname"
            onChange={handleLastNameChange}
          />
          {submitted && !values.lastname ? (
            <span class="validation" style={{ color: "red" }}>
              Please enter lastname
            </span>
          ) : null}
          <br></br>
          <input
            type="email"
            value={values.email}
            name="email"
            placeholder="Enter your email"
            onChange={handleEmailChange}
          />
          {submitted && !values.email ? (
            <span class="validation" style={{ color: "red" }}>
              Please enter email
            </span>
          ) : null}
          <br></br>
          <button type="submit" value="Submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
export default Signup;

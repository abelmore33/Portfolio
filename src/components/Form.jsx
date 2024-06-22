import React from "react";

const Form = () => {
  return (
    <div>
      <h1>Form</h1>
      <form>
        {" "}
        <div className="inputs">
          <label htmlFor="name">
            <p>Name (Organization)</p>
          </label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="inputs">
          <label htmlFor="email">
            <p>Email</p>
          </label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="inputs">
          <label htmlFor="message">
            <p>Message</p>
          </label>
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;

import React, { useState } from "react";

function FormContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!formData.name) {
      formErrors.name = "Name is required.";
    }
    if (!formData.email) {
      formErrors.email = "Email is required.";
    } else if (!validateEmail(formData.email)) {
      formErrors.email = "Email is not valid.";
    }
    if (!formData.message) {
      formErrors.message = "Message is required.";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      // Submit the form
      console.log("Form submitted successfully", formData);
    }
  };

  return (
    <div className="pb-20 lg:grid lg:grid-cols-[40%_60%] lg:mt-12">
      <h1 className="my-7 font-nova font-bold text-h2 leading-h2 tracking-h2 lg:my-0">
        Contact Me
      </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <p className="mb-1 font-bold text-[13px] leading-[30px]">Name</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`textFieldNormalState focus:textFieldActiveState ${
              errors.name ? "border-2 border-red-500 " : ""
            }`}
            placeholder="Insert your name here..."
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>
        <div className="mt-4">
          <p className="mb-1 font-bold text-[13px] leading-[30px]">Email Address</p>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`textFieldNormalState focus:textFieldActiveState ${
              errors.email ? "border-2 border-red-500 " : ""
            }`}
            placeholder="email@example.com"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>
        <div className="mt-4">
          <p className="mb-1 font-bold text-[13px] leading-[30px]">Message</p>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`textAreaNormalState focus:textAreaActiveState ${
              errors.message ? "border-2 border-red-500  " : ""
            }`}
            placeholder="How can I help you?"
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">{errors.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-darkBlue text-white text-[12px] tracking-[2px] py-3 px-12 mt-5"
        >
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
}

export default FormContact;

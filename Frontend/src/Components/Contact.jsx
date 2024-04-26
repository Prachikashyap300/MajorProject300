import React from "react";
import im from "../assets/bg.jpg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { enqueueSnackbar } from 'notistack';
import "../App.css";
import { Link } from 'react-router-dom';

const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required"),
  message: Yup.string().required("Message is required"),
});

const Contact = () => {
  const contactForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: async (values, action) => {
      console.log(values);
      const res = await fetch("http://localhost:4000/contact/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res.status);
      action.resetForm();

      if (res.status === 200) {
        enqueueSnackbar("Message send", { variant: "success" });
      } else {
        enqueueSnackbar("Message sending failed", { variant: "error" });
      }
    },
    validationSchema: ContactSchema,
  });

  return (
    <div className="container">
      
      <div className="card form-card">
        <div className="card-header">
            <h2 className="font-3">
            Feel free to contact 
            </h2>
        </div>
        <div className="card-body">
              <form onSubmit={contactForm.handleSubmit}>
                <div className="form-group">
                  <span style={{ color: "#051832", fontSize: "10" }}>
                    {contactForm.touched.name && contactForm.errors.name}
                  </span>
                  <br />
                  <input
                    id="name"
                    placeholder="Name"
                    type="text"
                    className="inp"
                    onChange={contactForm.handleChange}
                    value={contactForm.values.name}
                  />
                </div>
                <div className="form-group">
                <span style={{ color: "#051832", fontSize: "10" }}>
                    {contactForm.touched.email && contactForm.errors.email}
                  </span>
                  <br />
                  <input 
                    id="email"
                    placeholder="Email"
                    type="email"
                    className=" inp"
                    onChange={contactForm.handleChange}
                    value={contactForm.values.email}
                  />
                </div>
                <div className="form-group">
                <span style={{ color: "#051832", fontSize: "10" }}>
                    {contactForm.touched.message && contactForm.errors.message}
                  </span>
                  <br />
                  <input
                    id="messgae"
                    placeholder="meesss"
                    type="text-box"
                    className=" inp  message-box "
                    onChange={contactForm.handleChange}
                    value={contactForm.values.message}
                  />
                </div>
                
                <div className="text-center">
                  <button type="submit" className="font-2 submit-button">
                    <p>Send Message</p>
                  </button>
                </div>

              </form>
        </div>
              
      </div>
    </div>
  );
};

export default Contact;

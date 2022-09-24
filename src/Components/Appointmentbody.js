import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Appointmentbody = () => {
  return (
    <article className="mb-5">
      <div className="text-center mt-4 mb-3 section__title section__title--services">
        <h1>Appointment</h1>
      </div>
      <Form className="w-75 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Your Full Name</Form.Label>
          <Form.Control type="fullname" placeholder="Full Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="phonenumber" placeholder="Phone Number" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Symptoms</Form.Label>
          <Form.Control type="symptoms" placeholder="" />
        </Form.Group>

        <Form.Select className="mb-3" aria-label="Default select example">
          <option>Select Department</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
        <Form.Select className="mb-3" aria-label="Default select example">
          <option>Gender</option>
          <option value="1">Male</option>
          <option value="2">Female</option>
        </Form.Select>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Time (Please Specify Am/Pm)</Form.Label>
          <Form.Control type="time" placeholder="time" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" placeholder="date" />
        </Form.Group>

        <Link to="/appointment" className="btn btn-primary">
          Make an Appointment
        </Link>
      </Form>
    </article>
  );
};

export default Appointmentbody;

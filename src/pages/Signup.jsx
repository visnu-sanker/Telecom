import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Username, setUsername] = useState("");
  const navigate = useNavigate();

  const [validated, setValidated] = useState(false);

  const sign = () => {
    const data = {
      name: Name,
      email: Email,
      password: Password,
      username: Username,
      phone: Mobile,
    };
    axios.post("http://127.0.0.1:8000/api/register", data).then((response) => {
      console.log(data);
      if (response.data.error) {
        alert(response.data.error);
      } else {
        navigate("/login");
        console.log(response.data);
        alert("User Registered!");
      }
    });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <div className="container-app">
        <h1 className="home-btn">Login</h1>
        <div>
          <div className="loginFormContent">
            {/* <label>Password: </label> */}
            <TextField
              type="text"
              id="outlined-basic"
              label="Name"
              variant="outlined"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div className="loginFormContent">
            {/* <label>Password: </label> */}
            <TextField
              type="text"
              id="outlined-basic"
              label="Mobile Number"
              variant="outlined"
              onChange={(event) => {
                setMobile(event.target.value);
              }}
            />
          </div>
          <div className="loginFormContent">
            {/* <label>Password: </label> */}
            <TextField
              type="text"
              id="outlined-basic"
              label="Username"
              variant="outlined"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
          </div>
          <div className="loginFormContent">
            {/* <label>Email: </label> */}
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            {/* <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
    <Form.Control type="text" placeholder="Dr.Nick" onChange={(e) => setEmail(e.target.value)} />
  </FloatingLabel> */}
          </div>
          <br></br>
          <div className="loginFormContent">
            {/* <label>Password: </label> */}
            <TextField
              type="password"
              id="outlined-basic"
              label="Password"
              variant="outlined"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
          <br></br>
          <div className="loginFormContent">
            {" "}
            <Button variant="contained" type="submit" onClick={sign}>
              Register
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

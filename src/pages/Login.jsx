import React from "react";
// import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = () => {
    const data = { email: Email, password: Password };
    axios.post("http://127.0.0.1:8000/api/login", data).then((response) => {
      console.log(data);
      if (response.data.error) {
        alert(response.data.error);
      } else {
        sessionStorage.setItem("jwt", response.data.jwt);
        navigate("/user", {
          state: {
            email: response.data.userEmail,
            name: response.data.userName,
          },
        });
        console.log(response.data);
        // console.log("jwt", response.data.jwt);
        // alert("1");
      }
    });
  };

  return (
    <div>
      <div className="container-app">
        <h1 className="home-btn">Login</h1>
        <div>
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
            <Button variant="contained" type="submit" onClick={login}>
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

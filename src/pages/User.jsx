import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import user1 from "../images/user1.PNG";
import arrow from "../images/arrow.png";
import Button from "react-bootstrap/esm/Button";

const User = () => {
  const location = useLocation();
  console.log(location.state.name);
  return (
    <div>
      <h1
        style={{
          fontFamily: "Arial Black",
          marginTop: "53px",
          //   marginLeft: "180px",
          //   float: "left",
          textAlign: "center",
        }}
      >
        Welcome, {location.state.name}!
      </h1>

      {/* <h1>{location.state.email}</h1> */}
      <div style={{ textAlign: "center" }}>
        <img
          src={user1}
          alt="none"
          style={{
            width: "200px",
            marginLeft: "20px",
            marginTop: "1px",
          }}
        ></img>
      </div>
      <div style={{ textAlign: "center", marginTop: "35px", marginBottom:"15px" }}>
        <Button
          href="/login"
          // onClick={hClick}
          variant=""
          style={{
            marginLeft: "10px",
            marginTop: "0px",
            backgroundColor: "red",
            color: "white",
            borderRadius: "50px",
            fontWeight: "bold",
            fontSize: "14px",
            paddingLeft: "15px",
            paddingRight: "15px",
          }}
        >
          Mobile Recharge
        </Button>
        <Button
          href="/login"
          // onClick={hClick}
          variant=""
          style={{
            marginLeft: "15px",
            marginTop: "0px",
            backgroundColor: "red",
            color: "white",
            borderRadius: "50px",
            fontWeight: "bold",
            fontSize: "14px",
            paddingLeft: "15px",
            paddingRight: "15px",
          }}
        >
          New Broadband Connection
        </Button>
      </div>
      <h5
        style={{
          textAlign: "center",
          fontFamily: "Courier",
          marginTop: "15px",
        }}
      >
        <b>See your Active plans below</b>
      </h5>
      <div style={{ textAlign: "center" }}>
        <img src={arrow} style={{ width: "100px" }}></img>
      </div>

      <h3 style={{ textAlign: "center" }}>
        You currently have no active plans
      </h3>
      <h1>{location.state.plan}</h1>
    </div>
  );
};

export default User;

import Button from "react-bootstrap/esm/Button";
import React from "react";
import home from "../images/home.png";
import home2 from "../images/home2.PNG";
import home3 from "../images/home3.PNG";

const Home = () => {
  return (
    <div>
      <img src={home} style={{ width: "1280px" }} alt="none"></img>
      <h1
        style={{
          position: "absolute",
          top: "150px",
          left: "30px",
          color: "white",
          fontFamily: "Arial Black",
          fontSize: "53px",
        }}
      >
        Get your prepaid SIM,<br></br>Apply new broadnew<br></br>connection
      </h1>
      <Button
        style={{
          position: "absolute",
          top: "380px",
          left: "30px",
        }}
      >
        Explore Now!
      </Button>
      <h2
        style={{
          fontFamily: "Segoe Print",
          marginTop: "20px",
          textAlign: "center",
        }}
      >
        Enrich your digital Life
      </h2>
      <img
        src={home2}
        style={{
          marginTop: "15px",
          marginBottom: "20px",
          marginLeft: "315px",
          width: "50%",
        }}
        alt="none"
      ></img>
      {/* <div
        style={{
          borderTop: "1px solid #bbb",
          marginLeft: "53px",
          marginRight: "53px",
          marginBottom: "35px",
        }}
      ></div> */}
      <img src={home3} style={{ width: "1290px", marginTop: "35px" }}></img>
    </div>
  );
};

export default Home;

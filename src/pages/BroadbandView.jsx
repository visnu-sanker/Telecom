import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import gift from "../images/gift.png";
import percent from "../images/discount.png";
import download from "../images/download.png";
import care from "../images/customer-service.png";

import NetworkCheckIcon from "@mui/icons-material/NetworkCheck";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import InterestsIcon from "@mui/icons-material/Interests";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

const BroadbandView = () => {
  const [open, setOpen] = React.useState(false);

  const hClick = () => {
    setOpen(true);
  };

  const hClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={hClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={hClose}
        message="Login to Buy"
        action={action}
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Perks & Benefits</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {""}
          <NetworkCheckIcon
            style={{ marginRight: "35px" }}
          ></NetworkCheckIcon>{" "}
          1.2 Gbps bandwidth
        </Modal.Body>
        <div style={{ borderTop: "1px solid #bbb" }}></div>
        <Modal.Body>
          {""}
          <LiveTvIcon style={{ marginRight: "35px" }}></LiveTvIcon>{" "}
          Entertainment pack <s>₹586</s> ₹250/month
        </Modal.Body>
        <div style={{ borderTop: "1px solid #bbb" }}></div>
        <Modal.Body>
          {""}
          <InterestsIcon style={{ marginRight: "35px" }}></InterestsIcon>{" "}
          Interactive Applications
        </Modal.Body>
        <div style={{ borderTop: "1px solid #bbb" }}></div>
        <Modal.Body>
          {""}
          <CloudDownloadIcon
            style={{ marginRight: "35px" }}
          ></CloudDownloadIcon>{" "}
          High-Speed Downloads
        </Modal.Body>
        <div style={{ borderTop: "1px solid #bbb" }}></div>
        <Modal.Body>
          {""}
          <SportsEsportsIcon
            style={{ marginRight: "35px" }}
          ></SportsEsportsIcon>{" "}
          Free Gaming & Multimedia Resources
        </Modal.Body>
        <div style={{ borderTop: "1px solid #bbb" }}></div>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <h1 className="home-btn">Plans & Features</h1>
      <p className="br-sub">
        Broadband plans starting at ₹549. Get uninterrupted speed and unlimited
        data to enjoy benefits on the best partnerships with a single-click
        subscription.
      </p>
      <div className="perk">
        <Row xs={1} md={4}>
          <Card
            className="cgr"
            border="dark"
            style={{ width: "12rem", borderRadius: "20%" }}
          >
            <Card.Img
              variant="top"
              src={gift}
              className="cimg"
              style={{ width: "5rem" }}
            />
            <Card.Body style={{ textAlign: "center" }}>
              <Card.Text>Benefits worth ₹3150/month</Card.Text>
            </Card.Body>
          </Card>

          <Card
            className="cgr"
            border="dark"
            style={{ width: "12rem", borderRadius: "20%" }}
          >
            <Card.Img
              variant="top"
              src={percent}
              className="cimg"
              style={{ width: "5rem" }}
            />
            <Card.Body style={{ textAlign: "center" }}>
              <Card.Text>
                1 Month <br></br>free trial
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            className="cgr"
            border="dark"
            style={{ width: "12rem", borderRadius: "20%" }}
          >
            <Card.Img
              variant="top"
              src={download}
              className="cimg"
              style={{ width: "5rem" }}
            />
            <Card.Body style={{ textAlign: "center" }}>
              <Card.Text>
                High Download<br></br>Speed
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            className="cgr"
            border="dark"
            style={{ width: "12rem", borderRadius: "20%" }}
          >
            <Card.Img
              variant="top"
              src={care}
              className="cimg"
              style={{ width: "5rem" }}
            />
            <Card.Body style={{ textAlign: "center" }}>
              <Card.Text>
                24*7 Customer<br></br>service
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </div>
      {/* ----------------------------------------------------------------------------    */}
      <div
        style={{
          background: "#E8E8E8",
          paddingTop: "35px",
          paddingBottom: "35px",
        }}
      >
        <div className="bplan">
          <Row xs={1} md={4}>
            <Card
              border="warning"
              style={{
                marginLeft: "0px",
                marginRight: "40px",
                width: "18rem",
                borderRadius: "5%",
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                background:
                  "linear-gradient(to bottom, #800000 0%, #660033 53%)",
              }}
            >
              <Card.Body>
                <Card.Subtitle style={{ color: "white" }} className="mb-2">
                  Basic Plan
                </Card.Subtitle>
                <Card.Title className="fon" style={{ color: "yellow" }}>
                  <u>40 Mbps Speed</u>
                </Card.Title>
                <Card.Text style={{ color: "white", fontSize: "13px" }}>
                  500 GB monthly data
                </Card.Text>
                <Card.Subtitle style={{ color: "white" }} className="mb-2">
                  ₹549/month
                </Card.Subtitle>
                <div style={{ marginTop: "35px" }}>
                  <Button
                    href="/login"
                    onClick={hClick}
                    variant=""
                    style={{
                      marginLeft: "1px",
                      marginTop: "10px",
                      backgroundColor: "white",
                      color: "black",
                    }}
                  >
                    Buy Now
                  </Button>
                  <Card.Link
                    onClick={handleShow}
                    style={{
                      color: "white",
                      marginLeft: "15px",
                    }}
                    href="#"
                  >
                    <u>View more...</u>
                  </Card.Link>
                </div>
              </Card.Body>
            </Card>

            <Card
              border="warning"
              style={{
                marginLeft: "50px",
                marginRight: "55px",
                width: "18rem",
                borderRadius: "5%",
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                background:
                  "linear-gradient(to bottom, #800000 0%, #660033 53%)",
              }}
            >
              <Card.Body>
                <Card.Subtitle style={{ color: "white" }} className="mb-2">
                  Rapid Plan
                </Card.Subtitle>
                <Card.Title className="fon" style={{ color: "yellow" }}>
                  <u>100 Mbps Speed</u>
                </Card.Title>
                <Card.Text style={{ color: "white", fontSize: "13px" }}>
                  1000 GB monthly data
                </Card.Text>
                <Card.Subtitle style={{ color: "white" }} className="mb-2">
                  ₹985/month
                </Card.Subtitle>
                <div style={{ marginTop: "35px" }}>
                  <Button
                    variant=""
                    style={{
                      marginLeft: "1px",
                      marginTop: "10px",
                      backgroundColor: "white",
                      color: "black",
                    }}
                  >
                    Buy Now
                  </Button>
                  <Card.Link
                    onClick={handleShow}
                    style={{
                      color: "white",
                      marginLeft: "15px",
                    }}
                    href="#"
                  >
                    <u>View more...</u>
                  </Card.Link>
                </div>
              </Card.Body>
            </Card>

            <Card
              border="warning"
              style={{
                marginLeft: "30px",
                width: "18rem",
                borderRadius: "5%",
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                background:
                  "linear-gradient(to bottom, #800000 0%, #660033 53%)",
              }}
            >
              <Card.Body>
                <Card.Subtitle style={{ color: "white" }} className="mb-2">
                  Basic Plan
                </Card.Subtitle>
                <Card.Title className="fon" style={{ color: "yellow" }}>
                  <u>40 Mbps Speed</u>
                </Card.Title>
                <Card.Text style={{ color: "white", fontSize: "13px" }}>
                  500 GB monthly data
                </Card.Text>
                <Card.Subtitle style={{ color: "white" }} className="mb-2">
                  ₹549/month
                </Card.Subtitle>
                <div style={{ marginTop: "35px" }}>
                  <Button
                    variant=""
                    style={{
                      marginLeft: "1px",
                      marginTop: "10px",
                      backgroundColor: "white",
                      color: "black",
                    }}
                  >
                    Buy Now
                  </Button>
                  <Card.Link
                    onClick={handleShow}
                    style={{
                      color: "white",
                      marginLeft: "15px",
                    }}
                  >
                    <u>View more...</u>
                  </Card.Link>
                </div>
              </Card.Body>
            </Card>
          </Row>
        </div>
      </div>
      {/* ----------------2ND ROW-------------------------- */}

      <div
        style={{
          background: "#E8E8E8",
          paddingTop: "35px",
          paddingBottom: "35px",
        }}
      >
        <div className="bplan">
          <Row xs={1} md={4}>
            <Card
              border="warning"
              style={{
                marginLeft: "0px",
                marginRight: "40px",
                width: "18rem",
                borderRadius: "5%",
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                background:
                  "linear-gradient(to bottom, #800000 0%, #660033 53%)",
              }}
            >
              <Card.Body>
                <Card.Subtitle style={{ color: "white" }} className="mb-2">
                  Basic Plan
                </Card.Subtitle>
                <Card.Title className="fon" style={{ color: "yellow" }}>
                  <u>40 Mbps Speed</u>
                </Card.Title>
                <Card.Text style={{ color: "white", fontSize: "13px" }}>
                  500 GB monthly data
                </Card.Text>
                <Card.Subtitle style={{ color: "white" }} className="mb-2">
                  ₹549/month
                </Card.Subtitle>
                <div style={{ marginTop: "35px" }}>
                  <Button
                    variant=""
                    style={{
                      marginLeft: "1px",
                      marginTop: "10px",
                      backgroundColor: "white",
                      color: "black",
                    }}
                  >
                    Buy Now
                  </Button>
                  <Card.Link
                    onClick={handleShow}
                    style={{
                      color: "white",
                      marginLeft: "15px",
                    }}
                    href="#"
                  >
                    <u>View more...</u>
                  </Card.Link>
                </div>
              </Card.Body>
            </Card>

            <Card
              border="warning"
              style={{
                marginLeft: "50px",
                marginRight: "55px",
                width: "18rem",
                borderRadius: "5%",
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                background:
                  "linear-gradient(to bottom, #800000 0%, #660033 53%)",
              }}
            >
              <Card.Body>
                <Card.Subtitle style={{ color: "white" }} className="mb-2">
                  Basic Plan
                </Card.Subtitle>
                <Card.Title className="fon" style={{ color: "yellow" }}>
                  <u>40 Mbps Speed</u>
                </Card.Title>
                <Card.Text style={{ color: "white", fontSize: "13px" }}>
                  500 GB monthly data
                </Card.Text>
                <Card.Subtitle style={{ color: "white" }} className="mb-2">
                  ₹549/month
                </Card.Subtitle>
                <div style={{ marginTop: "35px" }}>
                  <Button
                    variant=""
                    style={{
                      marginLeft: "1px",
                      marginTop: "10px",
                      backgroundColor: "white",
                      color: "black",
                    }}
                  >
                    Buy Now
                  </Button>
                  <Card.Link
                    onClick={handleShow}
                    style={{
                      color: "white",
                      marginLeft: "15px",
                    }}
                    href="#"
                  >
                    <u>View more...</u>
                  </Card.Link>
                </div>
              </Card.Body>
            </Card>

            <Card
              border="warning"
              style={{
                marginLeft: "30px",
                width: "18rem",
                borderRadius: "5%",
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                background:
                  "linear-gradient(to bottom, #800000 0%, #660033 53%)",
              }}
            >
              <Card.Body>
                <Card.Subtitle style={{ color: "white" }} className="mb-2">
                  Basic Plan
                </Card.Subtitle>
                <Card.Title className="fon" style={{ color: "yellow" }}>
                  <u>40 Mbps Speed</u>
                </Card.Title>
                <Card.Text style={{ color: "white", fontSize: "13px" }}>
                  500 GB monthly data
                </Card.Text>
                <Card.Subtitle style={{ color: "white" }} className="mb-2">
                  ₹549/month
                </Card.Subtitle>
                <div style={{ marginTop: "35px" }}>
                  <Button
                    variant=""
                    style={{
                      marginLeft: "1px",
                      marginTop: "10px",
                      backgroundColor: "white",
                      color: "black",
                    }}
                  >
                    Buy Now
                  </Button>
                  <Card.Link
                    onClick={handleShow}
                    style={{
                      color: "white",
                      marginLeft: "15px",
                    }}
                    href="#"
                  >
                    <u>View more...</u>
                  </Card.Link>
                </div>
              </Card.Body>
            </Card>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default BroadbandView;

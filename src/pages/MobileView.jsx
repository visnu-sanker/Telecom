import React, { useState } from "react";
// import Breadcrumb from "react-bootstrap/Breadcrumb";
import bimg from "../images/mob-banner.jpg";
import mbad from "../images/mbadge.PNG";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

import Offcanvas from "react-bootstrap/Offcanvas";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import FiveGIcon from "@mui/icons-material/FiveG";
import FourGPlusMobiledataIcon from "@mui/icons-material/FourGPlusMobiledata";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";

// import { useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
// import PlayArrowIcon from "@mui/icons-material/PlayArrow";
// import SkipNextIcon from "@mui/icons-material/SkipNext";

const MobileView = () => {
  // const theme = useTheme();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Pack Details</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h5>
            <b>Pack MRP</b>
            <b style={{ marginLeft: "200px" }}>₹299</b>
          </h5>
          <div style={{ borderTop: "2px dashed #bbb" }}></div>
          <h6 style={{ marginTop: "20px" }}>
            <b>Calls</b>
            <b style={{ marginLeft: "225px" }}>Unlimited</b>
          </h6>
          <div style={{ borderTop: "1px solid #bbb" }}></div>
          <h6 style={{ marginTop: "10px" }}>
            <b>Data</b>
            <b style={{ marginLeft: "225px" }}>1.5gb/day</b>
          </h6>
          <div style={{ borderTop: "1px solid #bbb" }}></div>
          <h6 style={{ marginTop: "10px" }}>
            <b>SMS</b>
            <b style={{ marginLeft: "230px" }}>100 SMS/day</b>
          </h6>
          <div style={{ borderTop: "1px solid #bbb" }}></div>
          <h6 style={{ marginTop: "10px" }}>
            <b>Validity</b>
            <b style={{ marginLeft: "205px" }}>28 days</b>
          </h6>
          <Button
            href="/login"
            style={{ marginTop: "25px", marginLeft: "-3px" }}
          >
            Recharge Now!
          </Button>
        </Offcanvas.Body>
      </Offcanvas>

      <h1 className="home-btn">Best seller Unlimited plans</h1>
      <p className="br-sub">
        Choose a prepaid mobile plan that suits your unique digital aspirations.
      </p>
      <div className="mplan">
        <Row xs={1} md={4}>
          <Card
            border="light"
            style={{
              marginLeft: "0px",
              marginRight: "40px",
              width: "19rem",
              borderRadius: "5%",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
          >
            <Card.Body>
              <Card.Title
                style={{
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  fontSize: "35px",
                }}
              >
                ₹299{" "}
                <img
                  style={{ width: "80px", marginLeft: "70px" }}
                  src={mbad}
                  alt="none"
                ></img>
              </Card.Title>
              <Card.Subtitle style={{ marginTop: "35px" }} className="mb-2">
                <b>truly unlimited</b> calls{" "}
                <PhoneForwardedIcon
                  style={{ marginLeft: "15px" }}
                ></PhoneForwardedIcon>
              </Card.Subtitle>
              <Card.Subtitle style={{ marginTop: "10px" }} className="mb-2">
                <b>1.5gb/day</b> data{" "}
                <FiveGIcon style={{ marginLeft: "15px" }}></FiveGIcon>{" "}
                <FourGPlusMobiledataIcon></FourGPlusMobiledataIcon>
              </Card.Subtitle>
              <Card.Subtitle style={{ marginTop: "10px" }} className="mb-2">
                <b>28 days</b>{" "}
                <InsertInvitationIcon
                  style={{ marginLeft: "15px" }}
                ></InsertInvitationIcon>
              </Card.Subtitle>
              <Card.Text style={{ fontSize: "13px", marginTop: "-5px" }}>
                validity
              </Card.Text>
              <div style={{ marginTop: "35px" }}>
                <Button
                  href="/login"
                  // onClick={hClick}
                  variant=""
                  style={{
                    marginLeft: "-5px",
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
                  Recharge Now
                </Button>
                <Card.Link
                  onClick={handleShow}
                  // onClick={handleShow}
                  style={{
                    marginLeft: "28px",
                    fontSize: "14px",
                    color: "black",
                  }}
                  href="#"
                >
                  <b>
                    <u>pack details</u>
                  </b>
                </Card.Link>
              </div>
            </Card.Body>
          </Card>

          <Card
            border="light"
            style={{
              marginLeft: "0px",
              marginRight: "40px",
              width: "19rem",
              borderRadius: "5%",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
          >
            <Card.Body>
              <Card.Title
                style={{
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  fontSize: "35px",
                }}
              >
                ₹719{" "}
                <img
                  style={{ width: "80px", marginLeft: "70px" }}
                  src={mbad}
                ></img>
              </Card.Title>
              <Card.Subtitle style={{ marginTop: "35px" }} className="mb-2">
                <b>truly unlimited</b> calls{" "}
                <PhoneForwardedIcon
                  style={{ marginLeft: "15px" }}
                ></PhoneForwardedIcon>
              </Card.Subtitle>
              <Card.Subtitle style={{ marginTop: "10px" }} className="mb-2">
                <b>2gb/day</b> data{" "}
                <FiveGIcon style={{ marginLeft: "15px" }}></FiveGIcon>{" "}
                <FourGPlusMobiledataIcon></FourGPlusMobiledataIcon>
              </Card.Subtitle>
              <Card.Subtitle style={{ marginTop: "10px" }} className="mb-2">
                <b>84 days</b>{" "}
                <InsertInvitationIcon
                  style={{ marginLeft: "15px" }}
                ></InsertInvitationIcon>
              </Card.Subtitle>
              <Card.Text style={{ fontSize: "13px", marginTop: "-5px" }}>
                validity
              </Card.Text>
              <div style={{ marginTop: "35px" }}>
                <Button
                  href="/login"
                  // onClick={hClick}
                  variant=""
                  style={{
                    marginLeft: "-5px",
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
                  Recharge Now
                </Button>
                <Card.Link
                  onClick={handleShow}
                  // onClick={handleShow}
                  style={{
                    marginLeft: "28px",
                    fontSize: "14px",
                    color: "black",
                  }}
                  href="#"
                >
                  <b>
                    <u>pack details</u>
                  </b>
                </Card.Link>
              </div>
            </Card.Body>
          </Card>

          <Card
            border="light"
            style={{
              marginLeft: "0px",
              marginRight: "40px",
              width: "19rem",
              borderRadius: "5%",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
          >
            <Card.Body>
              <Card.Title
                style={{
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  fontSize: "35px",
                }}
              >
                ₹2999{" "}
                <img
                  style={{ width: "80px", marginLeft: "50px" }}
                  src={mbad}
                ></img>
              </Card.Title>
              <Card.Subtitle style={{ marginTop: "35px" }} className="mb-2">
                <b>truly unlimited</b> calls{" "}
                <PhoneForwardedIcon
                  style={{ marginLeft: "15px" }}
                ></PhoneForwardedIcon>
              </Card.Subtitle>
              <Card.Subtitle style={{ marginTop: "10px" }} className="mb-2">
                <b>2.5gb/day</b> data{" "}
                <FiveGIcon style={{ marginLeft: "15px" }}></FiveGIcon>{" "}
                <FourGPlusMobiledataIcon></FourGPlusMobiledataIcon>
              </Card.Subtitle>
              <Card.Subtitle style={{ marginTop: "10px" }} className="mb-2">
                <b>365 days</b>{" "}
                <InsertInvitationIcon
                  style={{ marginLeft: "15px" }}
                ></InsertInvitationIcon>
              </Card.Subtitle>
              <Card.Text style={{ fontSize: "13px", marginTop: "-5px" }}>
                validity
              </Card.Text>
              <div style={{ marginTop: "35px" }}>
                <Button
                  href="/login"
                  // onClick={hClick}
                  variant=""
                  style={{
                    marginLeft: "-5px",
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
                  Recharge Now
                </Button>
                <Card.Link
                  onClick={handleShow}
                  // onClick={handleShow}
                  style={{
                    marginLeft: "28px",
                    fontSize: "14px",
                    color: "black",
                  }}
                  href="#"
                >
                  <b>
                    <u>pack details</u>
                  </b>
                </Card.Link>
              </div>
            </Card.Body>
          </Card>
        </Row>
      </div>

      <h1 className="mhead">
        <b>Find India's most-loved plans here 😍</b>
      </h1>

      <Box
        style={{ marginLeft: "30px", marginTop: "23px" }}
        sx={{ width: "100%", typography: "body1" }}
      >
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              textColor="secondary"
              indicatorColor="secondary"
              onChange={handleChange}
              aria-label="lab API tabs example"
            >
              <Tab label="Truly Unlimited" value="1" />
              <Tab label="Data Only Plans" value="2" />
              <Tab label="Talktime (Top up voucher)" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <div>
              <h3 style={{ float: "left" }}>₹3359</h3>{" "}
              <Button
                href="/login"
                // onClick={hClick}
                variant=""
                style={{
                  marginLeft: "900px",
                  marginTop: "10px",
                  marginBottom: "-5px",
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  fontSize: "14px",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                }}
              >
                Recharge Now
              </Button>
              <p style={{ marginRight: "300px" }}>
                Unlimited Local STD & Roaming Calls
              </p>
              <p
                style={{
                  float: "right",
                  marginRight: "600px",
                  marginTop: "-48px",
                  fontSize: "20px",
                }}
              >
                <b>2.5 GB/day</b>
              </p>
            </div>
            <div style={{ borderTop: "1px solid #bbb" }}></div>
            <div style={{ marginTop: "20px" }}>
              <h3 style={{ float: "left" }}>₹2999</h3>{" "}
              <Button
                href="/login"
                // onClick={hClick}
                variant=""
                style={{
                  marginLeft: "900px",
                  marginTop: "10px",
                  marginBottom: "-5px",
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  fontSize: "14px",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                }}
              >
                Recharge Now
              </Button>
              <p style={{ marginRight: "300px" }}>
                Unlimited Local STD & Roaming Calls
              </p>
              <p
                style={{
                  float: "right",
                  marginRight: "600px",
                  marginTop: "-48px",
                  fontSize: "20px",
                }}
              >
                <b>2 GB/day</b>
              </p>
            </div>
          </TabPanel>
          <TabPanel value="2">
            <div>
              <h3 style={{ float: "left" }}>₹148</h3>{" "}
              <Button
                href="/login"
                // onClick={hClick}
                variant=""
                style={{
                  marginLeft: "900px",
                  marginTop: "10px",
                  marginBottom: "-5px",
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  fontSize: "14px",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                }}
              >
                Recharge Now
              </Button>
              <p style={{ marginRight: "300px" }}>High Speed Datax</p>
              <p
                style={{
                  float: "right",
                  marginRight: "600px",
                  marginTop: "-48px",
                  fontSize: "20px",
                }}
              >
                <b>15 GB</b>
              </p>
            </div>
          </TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default MobileView;

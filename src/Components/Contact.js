import React, { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBCardFooter,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
  MDBBtn
} from "mdbreact";
// import { number } from "prop-types";

export default props => {
  const phoneNumbersArray = props.result.phoneNumbers.split(",");
  const [modal, setModal] = useState(false);

  var number =
    props.result.employmentNumber[0] + props.result.employmentNumber[1];

  var photonumber = number.replace("0", 1);

  console.log("1: ", props.result.employmentNumber[0]);
  console.log("2: ", props.result.employmentNumber[1]);
  console.log("3: ", number);

  var image =
    "https://randomuser.me/api/portraits/med/men/" +
    Math.floor(Math.random() * 100) +
    ".jpg";
  return (
    <MDBCol
      lg='4'
      md='6'
      style={{ padding: 0 }}
      key={Math.random() * 10000000000}
    >
      <img
        // src={
        //   "https://randomuser.me/api/portraits/med/men/" +
        //   Math.floor(Math.random() * 100) +
        //   ".jpg"
        // }
        src={
          "https://randomuser.me/api/portraits/med/men/" + photonumber + ".jpg"
        }
        style={{
          width: "100px",
          height: "100px",
          position: "relative",
          top: "30px",
          left: "10px",
          borderRadius: "50%",
          zIndex: 1
        }}
        alt='face'
      ></img>
      <MDBCard style={{ margin: "8px" }}>
        {/* <MDBCardImage
          key={Math.random() * 10000000000}
          className='img-fluid'
          onClick={() => setModal(true)}
          style={{
            width: "20%",

            marginLeft: "40%",
            padding: "8px 0",
            borderRadius: "50%",
            position: "relative",
            top: ""
          }}
          src={
            "http://lorempixel.com/200/200/people/" +
            Math.floor(Math.random() * 10)
          }
          waves
        /> */}
        <MDBCardBody style={{ padding: 0 }} key={Math.random() * 10000000000}>
          <MDBCardTitle
            key={Math.random() * 10000000000}
            style={{
              color: "white",
              margin: "0",
              paddingLeft: "90px"
            }}
            className='blue-gradient'
          >
            {props.result.firstName === undefined
              ? "Name"
              : props.result.firstName + " " + props.result.lastName}
          </MDBCardTitle>
          <MDBCardText
            key={Math.random() * 10000000000}
            style={{
              color: "white",
              margin: 0,
              backgroundColor: "lightgray",
              paddingLeft: "8px"
            }}
          >
            {props.result.department}
          </MDBCardText>
          <MDBCardText
            key={Math.random() * 10000000000}
            style={{ paddingLeft: "8px" }}
          >
            Internal Phone: {props.result.shortNumber}
          </MDBCardText>
          <MDBCardFooter key={Math.random() * 10000000000} className='center'>
            <MDBBtn
              onClick={() => setModal(true)}
              outline
              color='info'
              size='sm'
              style={{ display: "block", maxWidth: "300px", margin: "auto" }}
            >
              More Info
            </MDBBtn>
          </MDBCardFooter>
        </MDBCardBody>
      </MDBCard>
      <MDBModal isOpen={modal}>
        <MDBModalHeader className='blue-gradient' style={{ height: "160px" }}>
          <img
            src={
              "https://randomuser.me/api/portraits/men/" + photonumber + ".jpg"
            }
            style={{
              width: "200px",
              height: "200px",
              position: "relative",
              top: "-40px",
              left: "-120px",
              borderRadius: "30% 20px 20px 30% ",
              zIndex: 1
            }}
          ></img>
          <span
            style={{
              position: "relative",
              top: "-40px",
              left: "-118px",
              color: "white"
            }}
          >
            {props.result.firstName + " " + props.result.lastName}
          </span>
        </MDBModalHeader>
        <MDBModalBody>
          Department: {props.result.department}
          <br />
          E-Mail: {props.result.eMail} <br />
          Employment Number: {props.result.employmentNumber}
          {phoneNumbersArray.map(number => (
            <p key={Math.random() * 10000000000} style={{ margin: 0 }}>
              Phone: {number}
            </p>
          ))}
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn
            color='secondary'
            outline
            size='sm'
            onClick={() => setModal(false)}
            style={{ display: "block", maxWidth: "300px", margin: "auto" }}
          >
            Close
          </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBCol>
  );
};

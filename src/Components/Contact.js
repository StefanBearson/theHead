import React, { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
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
  console.log(props);
  var image =
    "http://lorempixel.com/200/200/people/" + Math.floor(Math.random() * 11);
  console.log(image);
  return (
    <MDBCol
      lg='4'
      md='6'
      style={{ padding: 0 }}
      key={Math.random() * 10000000000}
    >
      <img
        src={
          "http://lorempixel.com/200/200/people/" +
          Math.floor(Math.random() * 10)
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
            internal number: {props.result.shortNumber}
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
        <MDBModalHeader className='blue-gradient'>
          {props.result.firstName + " " + props.result.lastName}
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

import React, { useState, Fragment } from "react";
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
      <MDBCard style={{ margin: "8px" }}>
        <MDBCardImage
          key={Math.random() * 10000000000}
          className='img-fluid'
          onClick={() => setModal(true)}
          style={{
            width: "20%",
            marginLeft: "40%",
            padding: "8px 0",
            borderRadius: "50%"
          }}
          src={
            "http://lorempixel.com/200/200/people/" +
            Math.floor(Math.random() * 10)
          }
          waves
        />
        <MDBCardBody style={{ padding: 0 }} key={Math.random() * 10000000000}>
          <MDBCardTitle
            key={Math.random() * 10000000000}
            style={{
              color: "white",
              margin: "0",
              paddingLeft: "8px"
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
          <MDBCardFooter key={Math.random() * 10000000000} center>
            <Fragment>
              <MDBBtn
                onClick={() => setModal(true)}
                outline
                color='info'
                size='sm'
                style={{ margin: "auto" }}
              >
                More Info
              </MDBBtn>
            </Fragment>
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
          >
            Close
          </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBCol>
  );
};

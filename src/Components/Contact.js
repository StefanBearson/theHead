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

export default props => {
  const phoneNumbersArray = props.result.phoneNumbers.split(",");
  const [modal, setModal] = useState(false);

  const number =
    props.result.employmentNumber[0] + props.result.employmentNumber[1];

  const photonumber = number.replace("0", 1);

  return (
    <MDBCol
      lg='4'
      md='6'
      style={{ padding: 0 }}
      key={Math.random() * 10000000000}
    >
      <img
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
      />
      <MDBCard style={{ margin: "8px" }}>
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
            style={{ padding: "8px", margin: "0" }}
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
          <img alt={"Nice people"}
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
          />
          <span
            style={{
              position: "relative",
              top: "-40px",
              left: "-115px",
              color: "white"
            }}
          >
            {props.result.firstName + " " + props.result.lastName}
          </span>
        </MDBModalHeader>
        <MDBModalBody style={{ color: "dimgray" }}>
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

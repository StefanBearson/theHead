import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBCardFooter
} from "mdbreact";
// import { number } from "prop-types";

export default props => {
  const phoneNumbersArray = props.result.phoneNumbers.split(",");

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
          style={{ width: "20%", marginLeft: "40%", padding: "8px 0" }}
          src='http://blog.springfield.k12.or.us/yolanda/files/2009/02/person-placeholder-7.png'
          waves
        />
        <MDBCardBody style={{ padding: 0 }} key={Math.random() * 10000000000}>
          <MDBCardTitle
            key={Math.random() * 10000000000}
            style={{
              color: "white",
              margin: "0",
              paddingLeft: "8px",
              backgroundColor: "gray"
            }}
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
              backgroundColor: "gray",
              paddingLeft: "8px"
            }}
          >
            {props.result.department}
          </MDBCardText>
          <MDBCardText
            key={Math.random() * 10000000000}
            style={{ paddingLeft: "8px" }}
          >
            E-Mail: {props.result.eMail} <br />
            {/* Phone: {props.result.phoneNumbers} <br /> */}
            {phoneNumbersArray.map(number => (
              <p key={Math.random() * 10000000000} style={{ margin: 0 }}>
                Phone: {number}
              </p>
            ))}
            Department: {props.result.department}
          </MDBCardText>
          <MDBCardFooter key={Math.random() * 10000000000}>
            Shortnumber (Skype):{" "}
            <a style={{ color: "blue" }}>{props.result.shortNumber}</a>
          </MDBCardFooter>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

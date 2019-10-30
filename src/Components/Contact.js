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
import { number } from "prop-types";

export default props => {
  console.log(props);

  const phoneNumbersArray = props.result.phoneNumbers.split(",");
  console.log(phoneNumbersArray);
  return (
    <MDBCol lg='4' md='6'>
      <MDBCard style={{ margin: "2px" }}>
        <MDBCardImage
          className='img-fluid'
          style={{ width: "20%", marginLeft: "40%" }}
          src='http://blog.springfield.k12.or.us/yolanda/files/2009/02/person-placeholder-7.png'
          waves
        />
        <MDBCardBody style={{ padding: 0 }}>
          <MDBCardTitle
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
            style={{
              color: "white",
              margin: 0,
              backgroundColor: "gray",
              paddingLeft: "8px"
            }}
          >
            {props.result.department}
          </MDBCardText>
          <MDBCardText style={{ paddingLeft: "8px" }}>
            E-Mail: {props.result.eMail} <br />
            {/* Phone: {props.result.phoneNumbers} <br /> */}
            {phoneNumbersArray.map(number => (
              <p style={{ margin: 0 }}>Phone: {number}</p>
            ))}
            Department: {props.result.department}
          </MDBCardText>
          <MDBCardFooter>
            Shortnumber (Skype):{" "}
            <a style={{ color: "blue" }}>{props.result.shortNumber}</a>
          </MDBCardFooter>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

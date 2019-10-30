import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol
} from "mdbreact";

export default props => {
  console.log(props);
  return (
    <MDBCol>
      <MDBCard style={{ width: "22rem", marginBottom: "2%" }}>
        <MDBCardImage
          className='img-fluid'
          style={{ width: "50%", marginLeft: "25%" }}
          src='http://blog.springfield.k12.or.us/yolanda/files/2009/02/person-placeholder-7.png'
          waves
        />
        <MDBCardBody>
          <MDBCardTitle style={{ color: "black" }}>
            {props.result.firstName === undefined
              ? "Name"
              : props.result.firstName + " " + props.result.lastName}
          </MDBCardTitle>
          <MDBCardText>
            E-Mail: {props.result.eMail} <br />
            Phone: {props.result.phoneNumbers} <br />
            Department: {props.result.department}
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

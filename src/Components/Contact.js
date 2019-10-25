import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

export default (props) => {
    return (
        <MDBCol>
            <MDBCard style={{ width: "22rem" }}>
                <MDBCardImage className="img-fluid" style={{width: "50%", marginLeft: "25%"}} src="http://blog.springfield.k12.or.us/yolanda/files/2009/02/person-placeholder-7.png" waves />
                <MDBCardBody>
                    <MDBCardTitle style={{color: "black"}}>{props.name === undefined ? "Name" : props.name}</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the card title and make
                        up the bulk of the card&apos;s content.
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    )
}
import React from "react";
import { MDBContainer } from "mdbreact";

export default props => {
  return (
    <MDBContainer fluid style={{ padding: "0" }}>
      <div
        style={{
          width: "100",
          height: "40vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1470219556762-1771e7f9427d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <MDBContainer style={{ paddingTop: "17vh" }}>
          <h2
            className='h1-responsive'
            style={{
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.29)",
              padding: "0.5em",
                fontFamily: "Arial Black"
            }}
          >
            {props.title}
          </h2>
        </MDBContainer>
      </div>
    </MDBContainer>
  );
};

import React, { useState, useEffect } from "react";
import "./App.css";
import Contact from "./Components/Contact";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import SectionHeader from "./Components/SectionHeader";


function App() {
  const [umbracoData, setUmbracoData] = useState([]);

  const getDataFromUmbraco = async () => {
    console.log("hej");
    let rawData = await fetch(
      "https://localhost:44319/people/?alttemplate=AsJson"
    );
    let data = await rawData.json();
    console.log(data);
    setUmbracoData(data);
  };

  // useEffect(() => {
  //   if (umbracoData.length === 0) {
  //     getDataFromUmbraco();
  //   }
  // }, []);

  return (
    <>
      <SectionHeader />
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <h1>Find a specific employee?</h1>
            <p>Search on department or country</p>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <input
            className="lcv-searchbar"
            type="text"
            placeholder="Search contact by typing.."
          />
          <button type="submit" onClick={getDataFromUmbraco}>
            Search
          </button>
        </MDBRow>
        <MDBRow>
          <Contact />
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default App;

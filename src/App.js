import React, { useState, useEffect } from "react";
import "./App.css";
import Contact from "./Components/Contact";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import SectionHeader from "./Components/SectionHeader";
import InputField from "./Components/SaveTextFieldValue.js";

import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from "constants";

function App() {
  const hostUrl = "https://localhost:44319/";
  const [pageTitle, setPageTitle] = useState("");
  const [fetchPath, setFetchPath] = useState("people");
  const [fetchedPeople, setFetchedPeople] = useState([]);

  useEffect(()=>{
    getData(`${fetchPath}`);
  },[]);

  const arrayNesting = fetchPath.split("/").length;

  const getData = async path => {
    const response = await fetch(`${hostUrl}${path}?alttemplate=AsJson`).then(
      x => x.json()
    );
    setPageTitle(getPageTitle(response));
    setFetchedPeople(getFetchedPeople(response));
    console.log(response);
  };

  const getFetchedPeople = array => {
    if (arrayNesting === 0 || arrayNesting === 1) {
      let departments = array.countries.map(x =>
        x.departments.map(x => x.people)
      );
      console.table(departments.flat([2]));
      return departments.flat([2]);
      
    }
    if (arrayNesting === 2) {
      let departments = array.departments.map(x => x.people);
      console.table(departments.flat([2]));
      return departments.flat([2]);
    }
    if (arrayNesting === 3) {
      let people = array.people;
      console.table(people.flat([2]));
      return people.flat([2]);
    }
  };

  const getPageTitle = array => {
    if (array.pageTitle !== undefined) {
      return array.pageTitle;
    }
    if (array.countryName !== undefined) {
      return array.countryName;
    }
    if (array.departmentName !== undefined) {
      return array.departmentName;
    }
    return "Search employees";
  };
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
          <InputField />
          <MDBBtn>Sweden</MDBBtn>
          <MDBBtn>USA</MDBBtn>
          <MDBBtn>Department?</MDBBtn>
        </MDBRow>
        <MDBRow>
          {fetchedPeople.map((people, index) => {
            return <Contact key={index} result={people} />
          })} 
        </MDBRow>
      </MDBContainer>
    </>
  );
}
 
export default App;

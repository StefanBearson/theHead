import React, { useState, useEffect } from "react";
import "./App.css";
import Contact from "./Components/Contact";
import { MDBContainer, MDBRow } from "mdbreact";
import SectionHeader from "./Components/SectionHeader";
import InputField from "./Components/SaveTextFieldValue.js";
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";

import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from "constants";

function App() {
  const hostUrl = "https://localhost:44319/";
  const [pageTitle, setPageTitle] = useState("");
  const [fetchPath, setFetchPath] = useState("people/sweden");
  const [fetchedPeople, setFetchedPeople] = useState([]);

  useEffect(() => {
    getData(`${fetchPath}`);
  }, []);

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
      <MDBContainer style={{ marginTop: "2%", marginBottom: "2%" }}>
        <MDBRow>
          <MDBDropdown>
            <MDBDropdownToggle caret color="primary">
              Countries
            </MDBDropdownToggle>
            <MDBDropdownMenu basic>
              <MDBDropdownItem onClick={() => setFetchPath("people/sweden")}>
                Sweden
              </MDBDropdownItem>
              <MDBDropdownItem onClick={() => setFetchPath("people/usa")}>
                USA
              </MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
          <MDBDropdown>
            <MDBDropdownToggle caret color="primary">
              Departments
            </MDBDropdownToggle>
            <MDBDropdownMenu basic>
              <MDBDropdownItem
                onClick={() => setFetchPath("people/sweden/region-syd")}
              >
                Region Syd
              </MDBDropdownItem>
              <MDBDropdownItem
                onClick={() => setFetchPath("people/usa/region-west")}
              >
                Region WEST
              </MDBDropdownItem>
              <MDBDropdownItem
                onClick={() => setFetchPath("people/usa/region-south")}
              >
                Region SOUTH
              </MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBRow>
      </MDBContainer>
      <MDBContainer>
        <MDBRow>
          <InputField />
        </MDBRow>
        <MDBRow>
          {fetchedPeople.map((people, index) => {
            return <Contact key={index} result={people} />;
          })}
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default App;

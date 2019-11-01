import React, { useState, useEffect } from "react";
import "./App.css";
import Contact from "./Components/Contact";
import { MDBContainer, MDBRow } from "mdbreact";
import SectionHeader from "./Components/SectionHeader";
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";

function App() {
  const hostUrl = "https://localhost:44319/";
  const [pageTitle, setPageTitle] = useState("");
  const [fetchPath, setFetchPath] = useState("people/sweden");
  const [fetchedPeople, setFetchedPeople] = useState([]);

  const [search, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results = fetchedPeople.filter(p => p.firstName.toLowerCase().includes(search));
    setSearchResults(results);
    setFetchedPeople(results);
  }, [search]);

  useEffect(() => {
    getData(`${fetchPath}`);
  }, [fetchPath]);

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
      let departmentsRaw = array.countries.map(x => x.departments);
      let departments = departmentsRaw.flat([1]).map(x => {
        return x.people.map(person => {
          return {
            firstName: person.firstName,
            lastName: person.lastName,
            phoneNumbers: person.phoneNumbers,
            employmentNumber: person.employmentNumber,
            eMail: person.eMail,
            shortNumber: person.shortNumber,
            department: x.departmentName
          };
        });
      });
      return departments.flat([2]);
    }
    if (arrayNesting === 2) {
      let departments = array.departments.map(x => {
        return x.people.map(person => {
          return {
            firstName: person.firstName,
            lastName: person.lastName,
            phoneNumbers: person.phoneNumbers,
            employmentNumber: person.employmentNumber,
            eMail: person.eMail,
            shortNumber: person.shortNumber,
            department: x.departmentName
          };
        });
      });
      return departments.flat([2]);
    }
    if (arrayNesting === 3) {
      let people = array.people.map(person => {
        return {
          firstName: person.firstName,
          lastName: person.lastName,
          phoneNumbers: person.phoneNumbers,
          employmentNumber: person.employmentNumber,
          eMail: person.eMail,
          shortNumber: person.shortNumber,
          department: array.departmentName
        };
      });
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
            <input className="searchbar" type="text" placeholder="Search..."
              value={search}
              onChange={handleChange}
            />
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

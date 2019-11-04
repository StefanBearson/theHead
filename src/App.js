import React, {
  useState,
  useEffect
} from "react";
import "./App.css";
import Contact from "./Components/Contact";
import {
  MDBContainer,
  MDBRow
} from "mdbreact";
import SectionHeader from "./Components/SectionHeader";
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";
let tempPep = [];

function App() {
  const hostUrl = "https://localhost:44319/";
  const [pageTitle, setPageTitle] = useState("People");
  const [fetchPath, setFetchPath] = useState("people/sweden");
  const [fetchedPeople, setFetchedPeople] = useState([]);
  const [fetchedFilterOptions, setFetchedFilterOptions] = useState({});

  const [tempPeople, setTempPeople] = useState([]);

  const [search, setSearch] = useState("");

  const handleChange = event => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    setTempPeople(fetchedPeople);
    tempPep = fetchedPeople;

    console.log(tempPeople)

  }, [fetchedPeople]);

  useEffect(() => {
    if (search === "") {
      getData(`${fetchPath}`);
    }

    tempPep = fetchedPeople;
    const results = tempPep.filter(p =>
      p.fullName.toLowerCase().includes(search.toLowerCase())
    );
    tempPep = results;
    setTempPeople(tempPep)
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  useEffect(() => {
    getData(`${fetchPath}`);
    setSearch("")
  }, [fetchPath])

  const arrayNesting = fetchPath.split("/").length;

  const getData = async path => {
    const response = await fetch(`${hostUrl}${path}?alttemplate=AsJson`).then(
      x => x.json()
    );
    setPageTitle(getPageTitle(response));
    setFetchedPeople(getFetchedPeople(response));
    fetchCountriesAndDepartments();
  };

  const getFetchedPeople = array => {
    if (arrayNesting === 0 || arrayNesting === 1) {
      let departmentsRaw = array.countries.map(x => x.departments);
      let departments = departmentsRaw.flat([1]).map(x => {
        return x.people.map(person => {
          return buildPerson(x.departmentName, person);
        });
      });
      return departments.flat([2]);
    }
    if (arrayNesting === 2) {
      let departments = array.departments.map(x => {
        return x.people.map(person => {
          return buildPerson(x.departmentName, person);
        });
      });
      return departments.flat([2]);
    }
    if (arrayNesting === 3) {
      let people = array.people.map(person => {
        return buildPerson(array.departmentName, person);
      });
      return people.flat([2]);
    }
  };

  const buildPerson = (departmentName, person) => {
    return {
      firstName: person.firstName,
      lastName: person.lastName,
      phoneNumbers: person.phoneNumbers,
      employmentNumber: person.employmentNumber,
      eMail: person.eMail,
      shortNumber: person.shortNumber,
      department: departmentName,
      fullName: `${person.firstName} ${person.lastName}`
    };
  };

  const fetchCountriesAndDepartments = () => {
    fetch(`${hostUrl}umbraco/api/peoplesorting/departmentsandcountries`)
      .then(x => x.json())
      .then(x => {
        let departmentsArray = x.departments.map(x => x.map(prop => prop));
        let departments = departmentsArray.map(x => {
          return {
            departmentName: x[0].Value,
            belongingCountry: x[1].Value,
            slug: `people/${x[1].Value}/${x[0].Value.replace(" ", "-")}`
          };
        });

        let countriesArray = x.countries.map(x => {
          return {
            countryName: x[0].Value,
            slug: `people/${x[0].Value}`
          };
        });
        setFetchedFilterOptions({
          countries: countriesArray,
          departments: departments
        });
      });
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

  return (< >
    <SectionHeader title={
      pageTitle
    }
    /> <MDBContainer style={{
      marginTop: "2%",
      marginBottom: "2%"
    }
    } >
      <MDBRow >
        <MDBDropdown >
          <MDBDropdownToggle caret color='primary' >
            Countries </MDBDropdownToggle> <MDBDropdownMenu basic > {
              fetchedFilterOptions.countries === undefined ?
                "" : fetchedFilterOptions.countries.map((country, key) => {
                  return (<MDBDropdownItem key={
                    key
                  }
                    onClick={
                      () => setFetchPath(`${country.slug}`)
                    } > {
                      country.countryName
                    } </MDBDropdownItem>
                  );
                })
            } <MDBDropdownItem onClick={
              () => setFetchPath("people")
            } >
              All </MDBDropdownItem> </MDBDropdownMenu > </MDBDropdown> <MDBDropdown >
          <MDBDropdownToggle caret color='primary' >
            Departments </MDBDropdownToggle> <MDBDropdownMenu basic > {
              fetchedFilterOptions.departments === undefined ?
                "" : fetchedFilterOptions.departments.map((departments, key) => {
                  return (< MDBDropdownItem key={
                    key
                  }
                    onClick={
                      () => setFetchPath(`${departments.slug}`)
                    } > {
                      departments.departmentName
                    } </MDBDropdownItem>
                  );
                })
            } <MDBDropdownItem onClick={
              () => setFetchPath("people")
            } >
              All </MDBDropdownItem> </MDBDropdownMenu > </MDBDropdown> </MDBRow > </MDBContainer> <MDBContainer >
      <MDBRow >
        < input className='searchbar'
          type='text'
          placeholder='Search...'
          value={
            search
          }
          onChange={
            handleChange
          }
        /> </MDBRow > <MDBRow > {
          tempPep.map((people, index) => {
            return <Contact key={
              index
            }
              result={
                people
              }
            />;
          })
        } </MDBRow> </MDBContainer > </>
  );
}

export default App;
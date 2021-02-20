import React, { useEffect, useState } from "react";
import EmployeeDetail from "./EmployeeDetail";
import Search from "./Search";
import API from "../utils/API";
import "./style.css";

function Container() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  let loadUsers = function () {
    API.search()
      .then((employees) => {
        setEmployees(employees);
      })

      .catch((err) => console.log(err));
  };

  const sortName = function () {
    setEmployees(
      [...employees].sort((a, b) => {
        if (a.firstName > b.firstName) {
          return 1;
        } else {
          return -1;
        }
      })
    );
  };

  const sortAddress = function () {
    setEmployees(
      [...employees].sort((a, b) => {
        if (a.state > b.state) {
          return 1;
        } else {
          return -1;
        }
      })
    );
  };

  const sortPhone = function () {
    setEmployees(
      [...employees].sort((a, b) => {
        if (a.phone > b.phone) {
          return 1;
        } else {
          return -1;
        }
      })
    );
  };

  const handleInputChange = (event) => {
    let input = event.target.input;
    const value = event.target.value;
    setSearch({
      [input]: value,
    });
    console.log("hello");
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("clicky clicky");
  };

  return (
    <div>
      <h2 id="title">Employee Directory</h2>
      <Search
        className="search"
        value={search.Search}
        handleInputChange={search.handleInputChange}
        handleFormSubmit={search.handleFormSubmit}
      />
      <table id="directory">
        <thead className="head">
          <tr>
            <th></th>
            <th onClick={() => sortName()} className="menu_links">
              Name
            </th>
            <th> Email </th>
            <th onClick={() => sortAddress()} className="menu_links">
              Address
            </th>
            <th> Birthday </th>
            <th onClick={() => sortPhone()} className="menu_links">
              Phone
            </th>
          </tr>
        </thead>
        <tbody className="table">
          {employees.map((employee) => (
            <EmployeeDetail
              key={employee.id}
              picture={employee.picture}
              employeeName={`${employee.firstName} ${employee.lastName}`}
              email={employee.email}
              birthday={employee.birthday}
              phone={employee.phone}
              address1={`${employee.streetNum} ${employee.street}`}
              address2={`${employee.city}, ${employee.state} ${employee.postcode}`}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Container;

import React, { useEffect, useState } from "react";
import EmployeeDetail from "./EmployeeDetail";
import API from "../utils/API";
import "./style.css";

function RugContainer() {
  const [employee, setEmployee] = useState([]);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  function loadUsers() {
    API.search()
      .then((employees) => {
        setEmployees(employees);
        setEmployee(employees[0]);
      })

      .catch((err) => console.log(err));
  }

  let sortName = function () {
    setEmployee(
      employees.sort((a, b) => {
        if (a.firstName > b.firstName) {
          return 1;
        } else {
          return -1;
        }
      })
    );
  };

  let sortAddress = function () {
    setEmployee(
      employees.sort((a, b) => {
        if (a.state > b.state) {
          return 1;
        } else {
          return -1;
        }
      })
    );
  };
  // setEmployee(employees.sort((a,b) => {
  //   if a.firstName > b.firstName
  //   return 1,
  //   else -1
  // }) look up on the interwebs also image, and
  //  need a search for name, email,. etc...

  return (
    <div>
      <h2 id="title">Employee Directory</h2>
      <table id="directory">
        <thead>
          <tr>
            <th></th>
            <th onClick={() => sortName()} className="menu_links">
              Name
            </th>
            <th> Email </th>
            <th> Birthday </th>
            <th> Phone </th>
            <th onClick={() => sortAddress()} className="menu_links">
              Address
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

export default RugContainer;

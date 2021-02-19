import React, { useEffect, useState } from "react";
import EmployeeDetail from "./EmployeeDetail";
import API from "../utils/API";
import "./style.css";

function RugContainer() {
  const [employee, setEmployee] = useState([]);
  const [employees, setEmployees] = useState([0]);

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

  return (
    <div>
      <h2 id="title">Employee Directory</h2>
      <table id="directory">
        <thead>
          <tr>
            <th> ID </th>
            <th> Name </th>
            <th> Email </th>
            <th> Birthday </th>
            <th> Phone </th>
            <th> Address</th>
          </tr>
        </thead>
        <tbody className="table">
          {employees.map((employee) => (
            <EmployeeDetail
              id={employee.id}
              picture={employee.picture}
              employeeName={`${employee.firstName}  ${employee.lastName}`}
              email={employee.email}
              birthday={employee.birthday}
              phone={employee.phone}
              address1={`${employee.streetNum} ${employee.street} ${employee.city}, ${employee.state} ${employee.postcode}, ${employee.country}`}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RugContainer;

import React, { useEffect, useState } from "react";
import Container from "../Container/Container";
import Row from "../Row/Row";
import Col from "../Col/Col";
import Card from "../Card/Card";
import EmployeeDetail from "../EmployeeDetail/EmployeeDetail";
import API from "../../utils/API";

function RugContainer() {
  const [employee, setEmployee] = useState({});
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  function loadUsers() {
    API.search()
      .then((employees) => {
        setEmployees(employees);
        setEmployee(employees[1]);
      })

      .catch((err) => console.log(err));
  }

  return (
    <div>
      <h2 id="title">Employee Directory</h2>
      <table id="directory">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Birthday</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <EmployeeDetail
            employeeName={`${employee.firstName} ${employee.lastName}`}
            email={employee.email}
            birthday={employee.birthday}
            phone={employee.phone}
            address1={`${employee.streetNum} ${employee.street} ${employee.city}, ${employee.state} ${employee.postcode}, ${employee.country}`}
            // image={employee.picture}
          />
        </tbody>
      </table>
    </div>
  );
}

export default RugContainer;

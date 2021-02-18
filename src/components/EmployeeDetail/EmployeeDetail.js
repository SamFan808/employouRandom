import React from "react";
import "./style.css";

function EmployeeDetail(props) {
  return (
    <div className="text-left">
      <tr key={props.employeeName}>
        <td>Name: {props.employeeName}</td>
        <td>Email: {props.email}</td>
        <td>Birthday: {props.birthday}</td>
        <td>Phone: {props.phone}</td>
        <td>Address: </td>
        <p>
          {props.address1}

          {props.address2}

          {props.address3}
        </p>
        <img className="card-img" src={props.image} alt="user thumbnail" />
      </tr>
    </div>
  );
}

export default EmployeeDetail;

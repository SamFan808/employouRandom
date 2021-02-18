import React from "react";
import "./style.css";

function EmployeeDetail(props) {
  return (
    <tr key={props.employeeName}>
      <td>{props.employeeName}</td>
      <td>{props.email}</td>
      <td>{props.birthday}</td>
      <td>{props.phone}</td>
      <td>
        {props.address1}
        {props.address2}
        {props.address3}
      </td>
    </tr>
  );
}

export default EmployeeDetail;

/* <img className="card-img" src={props.image} alt="user thumbnail" /> */

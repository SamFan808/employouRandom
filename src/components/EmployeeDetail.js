import React from "react";

function EmployeeDetail(props) {
  return (
    <div className="text-center">
      <h3>Name: {props.employeeName}</h3>
      <h3>Email: {props.email}</h3>
    </div>
  );
}

export default EmployeeDetail;

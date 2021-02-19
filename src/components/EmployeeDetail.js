import React from "react";

function EmployeeDetail({
  id,
  employeeName,
  email,
  birthday,
  phone,
  address1,
  picture,
}) {
  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{picture}</td>
      <td>{employeeName}</td>
      <td>{email}</td>
      <td>{birthday}</td>
      <td>{phone}</td>
      <td>{address1}</td>
    </tr>
  );
}

export default EmployeeDetail;

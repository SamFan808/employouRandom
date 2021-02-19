import React from "react";

function EmployeeDetail({
  id,
  employeeName,
  email,
  birthday,
  phone,
  address1,
  address2,
  picture,
}) {
  return (
    <tr>
      <td>
        <img src={picture}></img>
      </td>
      <td>{employeeName}</td>
      <td>{email}</td>
      <td>{birthday}</td>
      <td>{phone}</td>
      <td>
        {address1}
        <br />
        {address2}
      </td>
    </tr>
  );
}

export default EmployeeDetail;

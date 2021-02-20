import React from "react";

function EmployeeDetail({
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
        <img src={picture} alt={employeeName}></img>
      </td>
      <td>{employeeName}</td>
      <td>{email}</td>
      <td>
        {address1}
        <br />
        {address2}
      </td>
      <td>{birthday}</td>
      <td>{phone}</td>
    </tr>
  );
}

export default EmployeeDetail;

import React from "react";

function EmployeeDetail({ name, src, location, email, birthday, phone }) {
  return (
    <div className="text-center">
      <img
        alt={name}
        className="img-fluid"
        src={src}
        style={{ margin: "0 auto" }}
      />
      <h3>Name: {name}</h3>
      <h3>Address: {location}</h3>
      <h3>Email: {email}</h3>
      <h3>Birthday: {birthday}</h3>
      <h3>Phone: {phone}</h3>
    </div>
  );
}

export default EmployeeDetail;

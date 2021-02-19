import React from "react";

const RenderHeader = () => {
  let headerElement = ["id", "Name", "Email", "Birthday", "Phone", "Address"];
  return headerElement.map((key, index) => {
    return <th key={index}>{key.toUpperCase()}</th>;
  });
};

export default RenderHeader;

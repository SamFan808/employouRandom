import React, { useEffect, useState } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import EmployeeDetail from "./EmployeeDetail";
import API from "../utils/API";

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
    <EmployeeDetail
      employeeName={employee.firstName + employee.lastName}
      email={employee.email}
    />
  );
}

// class RugContainer extends Component {
//   state = {
//     image: "",
//     result: [],
//     search: "",
//   };

//   componentDidMount() {
//     this.searchEmployees("?results=12");
//   }

//   searchEmployees = (query) => {
//     API.search(query)
//       .then((res) => this.setState({ result: res.data }))
//       .catch((err) => console.log(err));
//   };

// handleInputChange = (event) => {
//   const name = event.target.name;
//   const value = event.target.value;
//   this.setState({
//     [name]: value,
//   });
//   this.searchEmployees(this.state.search);
// };

// // When the form is submitted, search the API for `this.state.search`
// handleFormSubmit = (event) => {
//   event.preventDefault(); // prevents refresh
//   this.searchEmployees(this.state.search);
// };

//   render() {
//     console.log(this.state.result);
//     return (
//       <Container>
//         <Row>
//           <Col size="md-8">
//             <Card heading={this.state.result.name}>
//               <EmployeeDetail
//                 name={this.state.result.name}
//                 src={this.state.result.picture}
//                 email={this.state.result.email}
//                 address={this.state.result.address}
//                 phone={this.state.result.phone}
//                 birthday={this.state.result.dob}
//               />
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }

export default RugContainer;

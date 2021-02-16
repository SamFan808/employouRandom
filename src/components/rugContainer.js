import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import EmployeeDetail from "./EmployeeDetail";
import API from "../utils/API";

class RugContainer extends Component {
  state = {
    result: {},
    search: "",
  };

  componentDidMount() {
    this.searchEmployees("?results=12");
  }

  searchEmployees = (query) => {
    API.search(query)
      .then((res) => this.setState({ result: res.data }))
      .catch((err) => console.log(err));
  };

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

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card heading={this.state.result.name}>
              <EmployeeDetail
                name={this.state.result.name}
                src={this.state.result.picture}
                email={this.state.result.email}
                address={this.state.result.address}
                phone={this.state.result.phone}
                birthday={this.state.result.dob}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default RugContainer;

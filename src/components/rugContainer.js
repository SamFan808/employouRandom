import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import employeeDetail from "./employeeDetail";
import API from "../utils/API";

class rugContainer extends Component {
  state = {
    result: {},
    search: "",
  };

  // componentDidMount() {
  //   this.searchEmployees("");
  // }

  searchEmployees = (query) => {
    API.search(query)
      .then((res) => this.setState({ result: res.data }))
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
    this.searchMovies(this.state.search);
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = (event) => {
    event.preventDefault(); // prevents refresh
    this.searchMovies(this.state.search);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card heading={this.state.result.Title}>
              {this.state.result.Title(
                <employeeDetail
                  first={this.state.result.first}
                  last={this.state.result.last}
                  email={this.state.result.email}
                  address={this.state.result.address}
                  ={this.state.result.Released}
                />
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default rugContainer;

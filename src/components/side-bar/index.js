import React, { Component } from "react";
import { Container, Repository, Form } from "./style";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddRepo = this.handleAddRepo.bind(this);
  }

  handleInputChange(e) {
    this.props.OnInputChange(e.target.value);
  }

  handleAddRepo(e) {
    e.preventDefault();
    this.props.OnSubmitRepo();
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleAddRepo}>
          <input
            type="text"
            placeholder="user/repository"
            onChange={this.handleInputChange}
          />
          <button type="submit">OK</button>
        </Form>
        {this.props.repositories.map(repository => (
          <Repository key={repository.id}>
            <header>
              <img
                src={repository.owner.avatar_url}
                alt={repository.owner.login}
              />
              <strong> {repository.name} </strong>
              <small> {repository.owner.login} </small>
            </header>
          </Repository>
        ))}
      </Container>
    );
  }
}

export default SideBar;

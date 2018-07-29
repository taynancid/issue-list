import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Repository, Form } from "./style";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.props.OnInputChange(e.target.value);
  }

  render() {
    return (
      <Container>
        <Form>
          <input
            type="text"
            placeholder="usuário/repository"
            onChange={this.handleInputChange}
          />
          <button type="submit">"OK"</button>
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

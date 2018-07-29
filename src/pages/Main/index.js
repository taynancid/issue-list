import React, { Component } from "react";
import { Container, Form } from "./style";
import SideBar from "../../components/side-bar";
import api from "../../services/api";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  state = {
    repoInput: "",
    repositories: []
  };

  handleInputChange(input) {
    this.setState({ repoInput: input });
  }

  // handleAddRepo = async e => {
  //   e.preventDefault();

  //   const { data: repository } = await api.get(
  //     `/repos/${this.state.repoInput}`
  //   );

  //   this.setState({
  //     repositories: [...this.state.repositories, repository],
  //     repoInput: ""
  //   });
  // };

  render() {
    return (
      <Container>
        {/* <Form onSubmit={this.handleAddRepo}>
          <input
            type="text"
            placeholder="usuário/repository"
            value={this.state.repoInput}
            onChange={e => this.setState({ repoInput: e.target.value })}
          />
          <button type="submit">"OK"</button>
        </Form> */}
        <SideBar
          repositories={this.state.repositories}
          OnInputChange={this.handleInputChange}
        />
      </Container>
    );
  }
}

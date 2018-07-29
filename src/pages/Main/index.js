import React, { Component } from "react";
import { Container } from "./style";
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

  handleAddRepo = async e => {
    const { data: repository } = await api.get(
      `/repos/${this.state.repoInput}`
    );

    let add = true;
    for (let i in this.state.repositories) {
      if (this.state.repositories[i].id === repository.id) {
        add = false;
        continue;
      }
    }

    if (add) {
      this.setState({
        repositories: [...this.state.repositories, repository],
        repoInput: ""
      });
    }
  };

  render() {
    return (
      <Container>
        <SideBar
          repositories={this.state.repositories}
          OnInputChange={this.handleInputChange}
          OnSubmitRepo={this.handleAddRepo}
        />
      </Container>
    );
  }
}

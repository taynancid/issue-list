import React, { Component } from 'react';
import { Container } from './style';
import SideBar from '../../components/side-bar';
import IssueList from '../../components/issues-list';
import api from '../../services/api';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelectRepo = this.handleSelectRepo.bind(this);
  }

  state = {
    repoInput: '',
    repositories: [],
    currentRepo: [],
    currentRepoName: '',
    currentRepoIssues: [],
  };

  handleInputChange(input) {
    this.setState({ repoInput: input });
  }

  handleAddRepo = async (e) => {
    const { data: repository } = await api.get(`/repos/${this.state.repoInput}`);

    let add = true;
    for (const i in this.state.repositories) {
      if (this.state.repositories[i].id === repository.id) {
        add = false;
        continue;
      }
    }

    if (add) {
      this.setState({
        repositories: [...this.state.repositories, repository],
        repoInput: '',
      });
    }
  };

  handleSelectRepo = async (repository) => {
    console.log(repository.full_name);
    const { data: repoIssues } = await api.get(`/repos/${repository.full_name}/issues?state=all`);

    this.setState({
      currentRepo: repository,
      currentRepoName: repository.name,
      currentRepoIssues: repoIssues,
    });
  };

  render() {
    return (
      <Container>
        <SideBar
          repositories={this.state.repositories}
          OnInputChange={this.handleInputChange}
          OnSubmitRepo={this.handleAddRepo}
          OnSelectRepo={this.handleSelectRepo}
        />
        <IssueList repoName={this.state.currentRepoName} issues={this.state.currentRepoIssues} />
      </Container>
    );
  }
}

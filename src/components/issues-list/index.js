import React, { Component } from 'react';
import { Container, Issue } from './style';
import RepoHeader from '../repo-header';

class IssueList extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.OnIssueTypeChange(e);
  }

  render() {
    return (
      <Container>
        <RepoHeader
          repoAvatar={this.props.repoAvatar}
          repoName={this.props.repoName}
          repoOwn={this.props.repoOwn}
          onChange={this.handleChange}
        />
        {this.props.issues
          .filter(issue => this.props.issueType.includes(issue.state))
          .map(issue => <Issue key={issue.id}>{issue.title}</Issue>)}
      </Container>
    );
  }
}

export default IssueList;

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

  editIssueTitle(str) {
    if (str.length > 27) {
      return str.substring(0, 24).concat('...');
    }
    return str;
  }

  goToIssue(url) {
    window.open(url, '_blank');
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
          .map(issue => (
            <Issue key={issue.id}>
              <img src={issue.user.avatar_url} alt={issue.name} />
              <body>
                <strong> {this.editIssueTitle(issue.title)} </strong>
                <small> {issue.user.login} </small>
                <button type="button" onClick={() => window.open(issue.html_url, '_blank')}>
                  {'Go to issue'}
                </button>
              </body>
            </Issue>
          ))}
      </Container>
    );
  }
}

export default IssueList;

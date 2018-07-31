import React from 'react';
import { Container, Issue } from './style';
import RepoHeader from '../repo-header';

const IssueList = ({ repoName, issues }) => (
  <Container>
    <RepoHeader repoName={repoName} />
    {issues.map(issue => <Issue key={issue.id}>{issue.title}</Issue>)}
  </Container>
);

export default IssueList;

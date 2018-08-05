import React, { Component } from 'react';
import { Container, Info } from './style';

class RepoHeader extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value);
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <Container>
        <Info>
          <img src={this.props.repoAvatar} alt={this.props.repoName} />
          <strong> {this.props.repoName} </strong>
          <small> {this.props.repoOwn} </small>
        </Info>
        <select onChange={this.handleChange}>
          <option value="all">All</option>
          <option value="open">Open</option>
          <option value="closed">Closed</option>
        </select>
      </Container>
    );
  }
}
export default RepoHeader;

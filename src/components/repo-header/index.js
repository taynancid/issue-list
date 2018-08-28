import React, { Component } from 'react';
import Select from 'react-select';
import { Container, Info } from './style';

const options = [
  { value: 'closed', label: 'Closed' },
  { value: 'open', label: 'Open' },
  { value: 'all', label: 'All' },
];

// const customStyles = {
//   control: () => ({
//     // none of react-selects styles are passed to <View />
//     width: 30,
//   }),
// };

class RepoHeader extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (option) => {
    console.log(Option);
    this.props.onChange(option.value);
  };

  render() {
    return (
      <Container>
        <Info>
          <img src={this.props.repoAvatar} alt={this.props.repoName} />
          <strong> {this.props.repoName} </strong>
          <small> {this.props.repoOwn} </small>
        </Info>
        <Select value="all" options={options} onChange={this.handleChange} />
      </Container>
    );
  }
}
export default RepoHeader;

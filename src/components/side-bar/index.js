import React from "react";
import PropTypes from "prop-types";
import { Container, Repository } from "./style";

const SideBar = ({ repositories }) => (
  <Container>
    {repositories.map(repository => (
      <Repository key={repository.id}>
        <header>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <strong> {repository.name} </strong>
          <small> {repository.owner.login} </small>
        </header>
      </Repository>
    ))}
  </Container>
);

SideBar.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      owner: PropTypes.shape({
        login: PropTypes.string,
        avatar_url: PropTypes.string
      })
    })
  ).isRequired
};

export default SideBar;

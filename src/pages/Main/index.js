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
    this.handleIssueType = this.handleIssueType.bind(this);
  }

  state = {
    repoInput: '',
    repositories: [
      {
        id: 11730342,
        node_id: 'MDEwOlJlcG9zaXRvcnkxMTczMDM0Mg==',
        name: 'vue',
        full_name: 'vuejs/vue',
        owner: {
          login: 'vuejs',
          id: 6128107,
          node_id: 'MDEyOk9yZ2FuaXphdGlvbjYxMjgxMDc=',
          avatar_url: 'https://avatars1.githubusercontent.com/u/6128107?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/vuejs',
          html_url: 'https://github.com/vuejs',
          followers_url: 'https://api.github.com/users/vuejs/followers',
          following_url: 'https://api.github.com/users/vuejs/following{/other_user}',
          gists_url: 'https://api.github.com/users/vuejs/gists{/gist_id}',
          starred_url: 'https://api.github.com/users/vuejs/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/vuejs/subscriptions',
          organizations_url: 'https://api.github.com/users/vuejs/orgs',
          repos_url: 'https://api.github.com/users/vuejs/repos',
          events_url: 'https://api.github.com/users/vuejs/events{/privacy}',
          received_events_url: 'https://api.github.com/users/vuejs/received_events',
          type: 'Organization',
          site_admin: false,
        },
        private: false,
        html_url: 'https://github.com/vuejs/vue',
        description:
          '🖖 A progressive, incrementally-adoptable JavaScript framework for building UI on the web.',
        fork: false,
        url: 'https://api.github.com/repos/vuejs/vue',
        forks_url: 'https://api.github.com/repos/vuejs/vue/forks',
        keys_url: 'https://api.github.com/repos/vuejs/vue/keys{/key_id}',
        collaborators_url: 'https://api.github.com/repos/vuejs/vue/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/vuejs/vue/teams',
        hooks_url: 'https://api.github.com/repos/vuejs/vue/hooks',
        issue_events_url: 'https://api.github.com/repos/vuejs/vue/issues/events{/number}',
        events_url: 'https://api.github.com/repos/vuejs/vue/events',
        assignees_url: 'https://api.github.com/repos/vuejs/vue/assignees{/user}',
        branches_url: 'https://api.github.com/repos/vuejs/vue/branches{/branch}',
        tags_url: 'https://api.github.com/repos/vuejs/vue/tags',
        blobs_url: 'https://api.github.com/repos/vuejs/vue/git/blobs{/sha}',
        git_tags_url: 'https://api.github.com/repos/vuejs/vue/git/tags{/sha}',
        git_refs_url: 'https://api.github.com/repos/vuejs/vue/git/refs{/sha}',
        trees_url: 'https://api.github.com/repos/vuejs/vue/git/trees{/sha}',
        statuses_url: 'https://api.github.com/repos/vuejs/vue/statuses/{sha}',
        languages_url: 'https://api.github.com/repos/vuejs/vue/languages',
        stargazers_url: 'https://api.github.com/repos/vuejs/vue/stargazers',
        contributors_url: 'https://api.github.com/repos/vuejs/vue/contributors',
        subscribers_url: 'https://api.github.com/repos/vuejs/vue/subscribers',
        subscription_url: 'https://api.github.com/repos/vuejs/vue/subscription',
        commits_url: 'https://api.github.com/repos/vuejs/vue/commits{/sha}',
        git_commits_url: 'https://api.github.com/repos/vuejs/vue/git/commits{/sha}',
        comments_url: 'https://api.github.com/repos/vuejs/vue/comments{/number}',
        issue_comment_url: 'https://api.github.com/repos/vuejs/vue/issues/comments{/number}',
        contents_url: 'https://api.github.com/repos/vuejs/vue/contents/{+path}',
        compare_url: 'https://api.github.com/repos/vuejs/vue/compare/{base}...{head}',
        merges_url: 'https://api.github.com/repos/vuejs/vue/merges',
        archive_url: 'https://api.github.com/repos/vuejs/vue/{archive_format}{/ref}',
        downloads_url: 'https://api.github.com/repos/vuejs/vue/downloads',
        issues_url: 'https://api.github.com/repos/vuejs/vue/issues{/number}',
        pulls_url: 'https://api.github.com/repos/vuejs/vue/pulls{/number}',
        milestones_url: 'https://api.github.com/repos/vuejs/vue/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/vuejs/vue/notifications{?since,all,participating}',
        labels_url: 'https://api.github.com/repos/vuejs/vue/labels{/name}',
        releases_url: 'https://api.github.com/repos/vuejs/vue/releases{/id}',
        deployments_url: 'https://api.github.com/repos/vuejs/vue/deployments',
        created_at: '2013-07-29T03:24:51Z',
        updated_at: '2018-08-03T22:39:22Z',
        pushed_at: '2018-08-03T15:28:16Z',
        git_url: 'git://github.com/vuejs/vue.git',
        ssh_url: 'git@github.com:vuejs/vue.git',
        clone_url: 'https://github.com/vuejs/vue.git',
        svn_url: 'https://github.com/vuejs/vue',
        homepage: 'http://vuejs.org',
        size: 23642,
        stargazers_count: 109739,
        watchers_count: 109739,
        language: 'JavaScript',
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: false,
        has_pages: false,
        forks_count: 15317,
        mirror_url: null,
        archived: false,
        open_issues_count: 279,
        license: {
          key: 'mit',
          name: 'MIT License',
          spdx_id: 'MIT',
          url: 'https://api.github.com/licenses/mit',
          node_id: 'MDc6TGljZW5zZTEz',
        },
        forks: 15317,
        open_issues: 279,
        watchers: 109739,
        default_branch: 'dev',
        organization: {
          login: 'vuejs',
          id: 6128107,
          node_id: 'MDEyOk9yZ2FuaXphdGlvbjYxMjgxMDc=',
          avatar_url: 'https://avatars1.githubusercontent.com/u/6128107?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/vuejs',
          html_url: 'https://github.com/vuejs',
          followers_url: 'https://api.github.com/users/vuejs/followers',
          following_url: 'https://api.github.com/users/vuejs/following{/other_user}',
          gists_url: 'https://api.github.com/users/vuejs/gists{/gist_id}',
          starred_url: 'https://api.github.com/users/vuejs/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/vuejs/subscriptions',
          organizations_url: 'https://api.github.com/users/vuejs/orgs',
          repos_url: 'https://api.github.com/users/vuejs/repos',
          events_url: 'https://api.github.com/users/vuejs/events{/privacy}',
          received_events_url: 'https://api.github.com/users/vuejs/received_events',
          type: 'Organization',
          site_admin: false,
        },
        network_count: 15317,
        subscribers_count: 5331,
      },
    ],
    currentRepo: [
      {
        id: 11730342,
        node_id: 'MDEwOlJlcG9zaXRvcnkxMTczMDM0Mg==',
        name: 'vue',
        full_name: 'vuejs/vue',
        owner: {
          login: 'vuejs',
          id: 6128107,
          node_id: 'MDEyOk9yZ2FuaXphdGlvbjYxMjgxMDc=',
          avatar_url: 'https://avatars1.githubusercontent.com/u/6128107?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/vuejs',
          html_url: 'https://github.com/vuejs',
          followers_url: 'https://api.github.com/users/vuejs/followers',
          following_url: 'https://api.github.com/users/vuejs/following{/other_user}',
          gists_url: 'https://api.github.com/users/vuejs/gists{/gist_id}',
          starred_url: 'https://api.github.com/users/vuejs/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/vuejs/subscriptions',
          organizations_url: 'https://api.github.com/users/vuejs/orgs',
          repos_url: 'https://api.github.com/users/vuejs/repos',
          events_url: 'https://api.github.com/users/vuejs/events{/privacy}',
          received_events_url: 'https://api.github.com/users/vuejs/received_events',
          type: 'Organization',
          site_admin: false,
        },
        private: false,
        html_url: 'https://github.com/vuejs/vue',
        description:
          '🖖 A progressive, incrementally-adoptable JavaScript framework for building UI on the web.',
        fork: false,
        url: 'https://api.github.com/repos/vuejs/vue',
        forks_url: 'https://api.github.com/repos/vuejs/vue/forks',
        keys_url: 'https://api.github.com/repos/vuejs/vue/keys{/key_id}',
        collaborators_url: 'https://api.github.com/repos/vuejs/vue/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/vuejs/vue/teams',
        hooks_url: 'https://api.github.com/repos/vuejs/vue/hooks',
        issue_events_url: 'https://api.github.com/repos/vuejs/vue/issues/events{/number}',
        events_url: 'https://api.github.com/repos/vuejs/vue/events',
        assignees_url: 'https://api.github.com/repos/vuejs/vue/assignees{/user}',
        branches_url: 'https://api.github.com/repos/vuejs/vue/branches{/branch}',
        tags_url: 'https://api.github.com/repos/vuejs/vue/tags',
        blobs_url: 'https://api.github.com/repos/vuejs/vue/git/blobs{/sha}',
        git_tags_url: 'https://api.github.com/repos/vuejs/vue/git/tags{/sha}',
        git_refs_url: 'https://api.github.com/repos/vuejs/vue/git/refs{/sha}',
        trees_url: 'https://api.github.com/repos/vuejs/vue/git/trees{/sha}',
        statuses_url: 'https://api.github.com/repos/vuejs/vue/statuses/{sha}',
        languages_url: 'https://api.github.com/repos/vuejs/vue/languages',
        stargazers_url: 'https://api.github.com/repos/vuejs/vue/stargazers',
        contributors_url: 'https://api.github.com/repos/vuejs/vue/contributors',
        subscribers_url: 'https://api.github.com/repos/vuejs/vue/subscribers',
        subscription_url: 'https://api.github.com/repos/vuejs/vue/subscription',
        commits_url: 'https://api.github.com/repos/vuejs/vue/commits{/sha}',
        git_commits_url: 'https://api.github.com/repos/vuejs/vue/git/commits{/sha}',
        comments_url: 'https://api.github.com/repos/vuejs/vue/comments{/number}',
        issue_comment_url: 'https://api.github.com/repos/vuejs/vue/issues/comments{/number}',
        contents_url: 'https://api.github.com/repos/vuejs/vue/contents/{+path}',
        compare_url: 'https://api.github.com/repos/vuejs/vue/compare/{base}...{head}',
        merges_url: 'https://api.github.com/repos/vuejs/vue/merges',
        archive_url: 'https://api.github.com/repos/vuejs/vue/{archive_format}{/ref}',
        downloads_url: 'https://api.github.com/repos/vuejs/vue/downloads',
        issues_url: 'https://api.github.com/repos/vuejs/vue/issues{/number}',
        pulls_url: 'https://api.github.com/repos/vuejs/vue/pulls{/number}',
        milestones_url: 'https://api.github.com/repos/vuejs/vue/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/vuejs/vue/notifications{?since,all,participating}',
        labels_url: 'https://api.github.com/repos/vuejs/vue/labels{/name}',
        releases_url: 'https://api.github.com/repos/vuejs/vue/releases{/id}',
        deployments_url: 'https://api.github.com/repos/vuejs/vue/deployments',
        created_at: '2013-07-29T03:24:51Z',
        updated_at: '2018-08-03T22:39:22Z',
        pushed_at: '2018-08-03T15:28:16Z',
        git_url: 'git://github.com/vuejs/vue.git',
        ssh_url: 'git@github.com:vuejs/vue.git',
        clone_url: 'https://github.com/vuejs/vue.git',
        svn_url: 'https://github.com/vuejs/vue',
        homepage: 'http://vuejs.org',
        size: 23642,
        stargazers_count: 109739,
        watchers_count: 109739,
        language: 'JavaScript',
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: false,
        has_pages: false,
        forks_count: 15317,
        mirror_url: null,
        archived: false,
        open_issues_count: 279,
        license: {
          key: 'mit',
          name: 'MIT License',
          spdx_id: 'MIT',
          url: 'https://api.github.com/licenses/mit',
          node_id: 'MDc6TGljZW5zZTEz',
        },
        forks: 15317,
        open_issues: 279,
        watchers: 109739,
        default_branch: 'dev',
        organization: {
          login: 'vuejs',
          id: 6128107,
          node_id: 'MDEyOk9yZ2FuaXphdGlvbjYxMjgxMDc=',
          avatar_url: 'https://avatars1.githubusercontent.com/u/6128107?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/vuejs',
          html_url: 'https://github.com/vuejs',
          followers_url: 'https://api.github.com/users/vuejs/followers',
          following_url: 'https://api.github.com/users/vuejs/following{/other_user}',
          gists_url: 'https://api.github.com/users/vuejs/gists{/gist_id}',
          starred_url: 'https://api.github.com/users/vuejs/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/vuejs/subscriptions',
          organizations_url: 'https://api.github.com/users/vuejs/orgs',
          repos_url: 'https://api.github.com/users/vuejs/repos',
          events_url: 'https://api.github.com/users/vuejs/events{/privacy}',
          received_events_url: 'https://api.github.com/users/vuejs/received_events',
          type: 'Organization',
          site_admin: false,
        },
        network_count: 15317,
        subscribers_count: 5331,
      },
    ],
    currentRepoName: 'Vue',
    currentRepoOwnName: 'Vuejs',
    currentRepoAvatar: 'https://avatars1.githubusercontent.com/u/6128107?v=4',
    currentRepoIssues: [
      {
        url: 'https://api.github.com/repos/vuejs/vue/issues/8574',
        repository_url: 'https://api.github.com/repos/vuejs/vue',
        labels_url: 'https://api.github.com/repos/vuejs/vue/issues/8574/labels{/name}',
        comments_url: 'https://api.github.com/repos/vuejs/vue/issues/8574/comments',
        events_url: 'https://api.github.com/repos/vuejs/vue/issues/8574/events',
        html_url: 'https://github.com/vuejs/vue/issues/8574',
        id: 345633830,
        node_id: 'MDU6SXNzdWUzNDU2MzM4MzA=',
        number: 8574,
        title: 'Error with import vue by es module ',
        user: {
          login: 'lizheming',
          id: 424491,
          node_id: 'MDQ6VXNlcjQyNDQ5MQ==',
          avatar_url: 'https://avatars2.githubusercontent.com/u/424491?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/lizheming',
          html_url: 'https://github.com/lizheming',
          followers_url: 'https://api.github.com/users/lizheming/followers',
          following_url: 'https://api.github.com/users/lizheming/following{/other_user}',
          gists_url: 'https://api.github.com/users/lizheming/gists{/gist_id}',
          starred_url: 'https://api.github.com/users/lizheming/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/lizheming/subscriptions',
          organizations_url: 'https://api.github.com/users/lizheming/orgs',
          repos_url: 'https://api.github.com/users/lizheming/repos',
          events_url: 'https://api.github.com/users/lizheming/events{/privacy}',
          received_events_url: 'https://api.github.com/users/lizheming/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [],
        state: 'closed',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 2,
        created_at: '2018-07-30T06:58:06Z',
        updated_at: '2018-07-30T07:04:25Z',
        closed_at: '2018-07-30T07:04:25Z',
        author_association: 'NONE',
        body:
          '### Version 2.5.17-beta.0 ### Reproduction link [https://jsbin.com/kizeyopoqa](https://jsbin.com/kizeyopoqa) ### Steps to reproduce open url and you can see an error in dev tool. ### What is expected? normal output console.log ### What is actually happening? Uncaught ReferenceError: process is not defined --- I think `process.env` should be compiled in build progress. <!-- generated by vue-issues. DO NOT REMOVE -->',
      },
    ],
    issueType: ['open', 'closed'],
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
      currentRepoAvatar: repository.owner.avatar_url,
      currentRepoOwnName: repository.owner.login,
    });
  };

  handleIssueType(type) {
    if (type === 'all') {
      this.setState({ issueType: ['open', 'closed'] });
    } else {
      this.setState({ issueType: [type] });
    }
  }

  render() {
    return (
      <Container>
        <SideBar
          repositories={this.state.repositories}
          OnInputChange={this.handleInputChange}
          OnSubmitRepo={this.handleAddRepo}
          OnSelectRepo={this.handleSelectRepo}
        />
        <IssueList
          repoAvatar={this.state.currentRepoAvatar}
          repoName={this.state.currentRepoName}
          repoOwn={this.state.currentRepoOwnName}
          issues={this.state.currentRepoIssues}
          issueType={this.state.issueType}
          OnIssueTypeChange={this.handleIssueType}
        />
      </Container>
    );
  }
}

import React from "react";

const RepoList = props => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <div>
      {props.repos.map(repo => {
        return (
          <div>
            <li>
              <strong>{repo.name}</strong>
              <ul>
                <li>{repo.id}</li>
                <li>{repo.owner}</li>
                <li>{repo.url}</li>
                <li>{repo.forks}</li>
              </ul>
            </li>
          </div>
        );
      })}
    </div>
  </div>
);

export default RepoList;

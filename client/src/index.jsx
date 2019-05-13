import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Search from "./components/Search.jsx";
import RepoList from "./components/RepoList.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    };
    this.search = this.search.bind(this);
  }
  componentWillMount() {
    console.log("will mount");
    $.ajax({
      method: "GET",
      url: "http://localhost:1128/repos",
      data: JSON.stringify(data),
      contentType: "application/json",
      success: data => {
        this.setState({ repos: data });
      }
    });
  }
  search(term) {
    console.log(`${term} was searched`);
    // TODO
    let data = { username: term };
    $.ajax({
      type: "POST",
      url: "http://localhost:1128/repos",
      data: JSON.stringify(data),
      contentType: "application/json", // very import
      success: data => {
        console.log(data);
      },
      error: () => console.log("error")
    });
  }

  render() {
    return (
      <div>
        <h1>Github Fetcher</h1>
        <RepoList repos={this.state.repos} />
        <Search onSearch={this.search.bind(this)} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

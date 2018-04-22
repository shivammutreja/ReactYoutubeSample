import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ""}
  }

  onChangeHandler(query) {
    this.setState({term: query});
    this.props.searchVideo(query);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          type="text"
          value={this.state.term}
          onChange={(event) => this.onChangeHandler(event.target.value)}
        />
        &nbsp;
        // <button onClick={() => this.props.searchVideo(this.state.term)}>Search</button>
        <hr/>
        Value of Search Component is: {this.state.term}
      </div>
    )
  }
}

export default SearchBar;

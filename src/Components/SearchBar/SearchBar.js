import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  search() {
    this.props.onSearch(this.state.term);
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.props.onSearch(this.state.term);
    }
  }

  handleTermChange(event) {
    this.setState({
      term: event.target.value
    });
  }

  render() {
    return ( <
      div className = "SearchBar" >
      <
      input onKeyDown = {
        this.handleKeyPress
      }
      placeholder = "Enter A Song, Album, or Artist"
      onChange = {
        this.handleTermChange
      }
      /> <
      a onClick = {
        this.search
      } > SEARCH < /a> < /
      div >
    );
  }
}

export default SearchBar;
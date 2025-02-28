import React from "react";
import ReactDom from "react-dom";

class SearchBar extends React.Component {
  state = { term: "" };
  onFormSubmit=(e)=>{
    e.preventDefault()
    this.props.OnFormSubmit(this.state.term)
  }
  render() {
    return (
      <div className="ui form segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
        <div className="field">
          <label>Video Search</label>
          <input
            className="prompt"
            type="text"
            value={this.state.term}
            onChange={e => this.setState({ term: e.target.value })}
          />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;

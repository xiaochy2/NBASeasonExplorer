import React from "react";

class TeamFilter extends React.Component {
  handlechange = e => {
    this.props.filtTeam(e.target.value);
  };
  render() {
    return (
      <div className="filter-clear">
        <div className="filter">
          <label>Filter:</label>
          <select onChange={this.handlechange} defaultValue="Visitor/Home">
            <option value="Visitor/Home">Visitor/Home</option>
            <option value="Home">Home</option>
            <option value="Visitor">Visitor</option>
          </select>
        </div>
        <button className="clear" onClick={this.props.clear}>
          clear all
        </button>
      </div>
    );
  }
}

export default TeamFilter;

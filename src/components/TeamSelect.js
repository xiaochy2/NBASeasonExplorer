import React from "react";
import teamInfo from "../../data/teamInfo.json";
import TeamButton from "./TeamButton";

class TeamSelect extends React.Component {
  add = team => {
    this.props.add(team);
  };
  del = team => {
    this.props.del(team);
  };
  render() {
    return (
      <div className="teamSelect">
        <h2>Select your teams</h2>
        <div className="buttonGroup">
          {teamInfo.map((item, index) => (
            <TeamButton
              key={index}
              add={this.add}
              del={this.del}
              teamName={item.teamName}
              isSelected={
                this.props.teams.filter(team => team === item.teamName)
                  .length !== 0
              }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default TeamSelect;

import React from "react";
import classNames from "classnames";

class TeamButton extends React.Component {
  toggle = () => {
    if (this.props.isSelected) {
      this.props.del(this.props.teamName);
    } else {
      this.props.add(this.props.teamName);
    }
  };
  render() {
    return (
      <div className="teamSelect">
        <button
          className={classNames(this.props.isSelected && "button-bg-green")}
          onClick={this.toggle}
        >
          {this.props.teamName}
        </button>
      </div>
    );
  }
}

export default TeamButton;

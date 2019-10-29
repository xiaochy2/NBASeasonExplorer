import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

import Chart from "./Chart";
import TeamFilter from "./TeamFilter";
import TeamSelect from "./TeamSelect";
import CustomerInput from "./CustomerInput";

class App extends React.Component {
  chooseColor = index => {
    let sum = 0;
    if (index % 2 === 0) {
      sum = 5000000 * index;
    } else {
      sum = 8300000 + 5000000 * index;
    }
    let b = sum % 255;
    let temp = parseInt(sum / 255);
    let g = temp % 255;
    temp = parseInt(temp / 255);
    let r = temp;
    return `rgb(${r},${g},${b})`;
  };
  render() {
    const { teams, filt, myData } = this.props;
    //generate labels and datasets
    let labels = new Set();
    let datasets = [];
    teams.forEach((team, index) => {
      let singleSet = {
        label: team,
        fill: false,
        lineTension: 0,
        data: [],
        borderWidth: 2,
        pointBorderWidth: 2,
        backgroundColor: this.chooseColor(index),
        borderColor: this.chooseColor(30 - index)
      };

      if (filt === "Visitor/Home") {
        myData.forEach(item => {
          if (item["Visitor/Neutral"] === team) {
            singleSet.data.push({ x: item.Date, y: item.VPTS });
            labels.add(item.Date);
          } else if (item["Home/Neutral"] === team) {
            singleSet.data.push({ x: item.Date, y: item.HPTS });
            labels.add(item.Date);
          }
        });
      } else if (filt === "Visitor") {
        myData.forEach(item => {
          if (item["Visitor/Neutral"] === team) {
            singleSet.data.push({ x: item.Date, y: item.VPTS });
            labels.add(item.Date);
          }
        });
      } else if (filt === "Home") {
        myData.forEach(item => {
          if (item["Home/Neutral"] === team) {
            singleSet.data.push({ x: item.Date, y: item.HPTS });
            labels.add(item.Date);
          }
        });
      }
      datasets.push(singleSet);
    });
    const lab = [...labels].sort();
    return (
      <div className="App">
        <header>
          <div className="header-opacity" />
          <div className="title-des">
            <h1>NBA Season Explorer</h1>
            <p>
              A web page which draws a line chart of points scored over time for
              user-selected NBA team(s)
            </p>
          </div>
        </header>
        <main>
          <TeamSelect del={this.props.del} add={this.props.add} teams={teams} />
          <div className="chart-flit-clear">
            <Chart labels={lab} datasets={datasets} />
            <TeamFilter
              filtTeam={this.props.filtTeam}
              clear={this.props.clearAll}
            />
          </div>
          <CustomerInput addData={this.props.addData} />
        </main>
      </div>
    );
  }
}

const mapstateToProps = state => {
  return {
    myData: state.data,
    teams: state.teams,
    filt: state.filt
  };
};

function mapdispatchToProps(dispatch) {
  return {
    add: team => dispatch(actions.add(team)),
    del: team => dispatch(actions.del(team)),
    clearAll: () => dispatch(actions.clearAll()),
    filtTeam: filtOption => dispatch(actions.filtTeam(filtOption)),
    addData: data => dispatch(actions.addData(data))
  };
}

export default connect(
  mapstateToProps,
  mapdispatchToProps
)(App);

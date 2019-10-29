import React from "react";

class CustomrInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      message: ""
    };
  }
  handlechange = e => {
    this.setState({
      value: e.target.value,
      message: ""
    });
  };
  handlesubmit = () => {
    try {
      let test = JSON.parse(this.state.value);
      this.props.addData(test);
      this.setState({
        value: "",
        message: "Add successful"
      });
    } catch (e) {
      this.setState({
        value: "",
        message: "Valid input"
      });
    }
  };
  render() {
    return (
      <div className="customerInput">
        <h2>Import you own data</h2>
        <textarea
          value={this.state.value}
          onChange={this.handlechange}
          placeholder="Paste Json formart array here, for example:[{
    'Date': '10/25/16',
        'Start (ET)': '07:30:00 PM',
        'Visitor/Neutral':'New York Knicks',
        'VPTS': 88,
        'Home/Neutral': 'Cleveland Cavaliers',
        'HPTS': 117,
        '': 'Box Score',
        'T': '',
        'Attend.': 20562,
        'Notes': ''
      }]
  "
        />
        <p>{this.state.message}</p>
        <button onClick={this.handlesubmit}>Add Data</button>
      </div>
    );
  }
}

export default CustomrInput;

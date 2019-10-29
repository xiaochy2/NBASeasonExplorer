import React from "react";
import { Line } from "react-chartjs-2";

class Chart extends React.Component {
  render() {
    return (
      <div className="chart">
        <Line
          height={170}
          data={{
            labels: this.props.labels,
            datasets: this.props.datasets
          }}
          options={{
            title: {
              display: true,
              text: "NBA Match Statistics",
              fontSize: 25
            },
            legend: {
              display: true,
              position: "right",
              labels: {
                boxWidth: 15,
                fontSize: 10
              }
            }
          }}
        />
      </div>
    );
  }
}

export default Chart;

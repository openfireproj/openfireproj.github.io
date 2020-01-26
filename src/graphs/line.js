import React from 'react';
import ChartistGraph from 'react-chartist';

export class LineGraph extends React.Component {
  render() {
    var type = 'Line'
    const { args, eqn } = this.props
    const x = [0, 1, 2, 3, 4, 5,6,7,8,9,10];
    const y = x.map(x => eqn(...args, x))

    var data = {
      labels: x,
      series: [{data: y}]
    };

    var options = {
      //high: Math.max(...y) * 1.01, low: Math.min(...y) * 0.999999,
      axisX: {
        labelInterpolationFnc: function(value, index) {
          return index % 2 === 0 ? 
            value.toString().length > 5 ? (value * 0.001).toString + 'k' : value
          : null;
        }
      },
      axisY: {
        labelInterpolationFnc: function(value, index) {
          if (value === 0) { return 0 }

          return index % 2 === 0 ? 
            value.toString().length > 5 ? (value * 0.001).toString() + 'k' : value
          : null;
        }
      }
    };

    return (
      <ChartistGraph data={data} options={options} type={type} />
    )
  }
}

export default LineGraph;

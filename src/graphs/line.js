import React from 'react';
import ChartistGraph from 'react-chartist';

function numToLabel(value) {
    return value.toString().length > 5 ? (value * 0.001).toString + 'k' : value
}

export class LineGraph extends React.Component {
  static defaultProps = {
    domain: [0,1,2,3,4,5,6,7,8,9,10]
  }

  render() {
    var type = 'Line'
    const { args, eqn, domain } = this.props
    const y = domain.map(x => eqn(...args, x))

    var data = {
      labels: domain,
      series: [{data: y}]
    };

    var options = {
      axisX: {
        labelInterpolationFnc: function(value, index) {
          return index % 2 === 0 ?  numToLabel(value) : null;
        }
      },
      axisY: {
        labelInterpolationFnc: function(value, index) {
          if (value === 0) { return 0 }

          return index % 2 === 0 ?  numToLabel(value) : null;
        }
      }
    };

    return (
      <ChartistGraph key={Date.now()} data={data} options={options} type={type} />
    )
  }
}

export default LineGraph;

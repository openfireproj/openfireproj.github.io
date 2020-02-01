import React from 'react';
import ChartistGraph from 'react-chartist';

function numLabel(value) {
    let magnitudes = ' kMBT????'
    value = value.toString()
    let length = value.length
    let zeros = 0

    while (value[length-1 - zeros] === '0') {
        zeros += 1
    }

    // getting rid of digit commas
    zeros = zeros - (zeros % 3) 
    let magnitude = magnitudes[zeros/3]

    console.log(value, value.substring(0, length-zeros) + magnitude)
    return value.substring(0, length-zeros) + magnitude
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
          return index % 2 === 0 ?  numLabel(value) : null;
        }
      },
      axisY: {
        labelInterpolationFnc: function(value, index) {
          if (value === 0) { return 0 }

          return index % 2 === 0 ?  numLabel(value) : null;
        }
      }
    };

    return (
      <ChartistGraph key={Date.now()} data={data} options={options} type={type} />
    )
  }
}

export default LineGraph;

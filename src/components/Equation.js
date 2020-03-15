import React from 'react';
import LineGraph from '../graphs/line';
import TextField from '@material-ui/core/TextField';
import getField from './fields/Field';

export default class Equation extends React.Component {  
  constructor(props) {
    super(props);
    // init state based on param configuration
    this.state = {};
    for (const [param, paramConfig] of Object.entries(props.config.params)) {
      this.state[param] = paramConfig.default;
    }
  }

  componentDidMount() {
    this.executeEquation();
  }

  executeEquation() {
    const { config } = this.props;
    let args = {};
    for (const param of Object.keys(config.params)) {
      args[param] = this.state[param];
    }
    this.setState({ result: config.equation(args) });
  }

  handleChange = (key, value) => {
    this.setState({ [key]: value }, this.executeEquation)
  };

  graphArgs() {
    return Object.entries(this.state).map(kv => this.state[kv[0]]);
  }

  render() {
    const { config } = this.props;
    let widgets = [];
    let attribs = []

    for (const [name, paramConfig] of Object.entries(config.params)) {
      const {label, type} = paramConfig;
      const Field = getField(type);
      attribs.push(<Field
                    id={name} 
                    key={name}
                    label={label}
                    value={this.state[name]}
                    onChange={this.handleChange}
                  />);
    }
    attribs.push(
      <TextField
        disabled={true}
        inputProps={{
          style: { textAlign: "right" }
        }}        
        label={config.result.label}
        key="result"
        value={this.state.result}
      />
    )

    if (this.graph) {
      widgets.push(
        <LineGraph args={this.graphArgs()} eqn={this.eqn}/>
      )
    }

    return (
      <div id={`${config.id}-equation`}>
        <form id={config.id} name={config.id}> 
          <fieldset>
            <legend>{config.id}</legend>
            <p>{config.description}</p>
            {attribs}
            {widgets}
          </fieldset>
        </form>
      </div>
    )
  }
}

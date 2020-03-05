import React from 'react';
import LineGraph from '../graphs/line';
import MoneyInput from '../components/inputs/Money';
import TextField from '@material-ui/core/TextField';
import ParamConfig from '../components/ParamConfig';

export default class Equation extends React.Component {  
  constructor(props) {
    super(props);
    const params = ParamConfig.getConfig(props.config.params)
    // init state based on param configuration
    this.state = {};
    for (const [param, paramConfig] of Object.entries(params)) {
      this.state[param] = paramConfig.default;
    }
  }

  componentDidMount() {
    this.executeEquation();
  }

  executeEquation() {
    const { config } = this.props;
    const params = ParamConfig.getConfig(config.params)
    let args = {};
    for (const param of Object.keys(params)) {
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
    const params = ParamConfig.getConfig(config.params)
    let widgets = [];
    let attribs = []
    
    for (const [param, paramConfig] of Object.entries(params)) {
      if (paramConfig.type === "currency") {
        attribs.push(
          <MoneyInput
            id={param} 
            label={paramConfig.label}
            key={param}
            fieldKey={param}
            value={this.state[param]}
            onChange={this.handleChange}
          />
        );
      }
    }
    attribs.push(
      <TextField
        disabled={true}
        inputProps={{
          style: { textAlign: "right" }
        }}
        label={config.result.label}
        value={this.state.result}
      />
    )

    if (this.graph) {
      widgets.push(
        <LineGraph args={this.graphArgs()} eqn={this.eqn}/>
      )
    }

    return (
      <div>
        <form id={this.formName} name={this.formName}> 
          <fieldset>
            <legend>{this.formName}</legend>
            <p>{config.description}</p>
            {attribs}
            {widgets}
          </fieldset>
        </form>
      </div>
    )
  }
}

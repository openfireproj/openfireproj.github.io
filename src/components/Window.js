import React from 'react';
import Loader from '../loader';
import Equation from './Equation';


export default class Window extends React.Component {
  constructor(props) {
    super(props);
    this.state = {equations: []}
    props.equations.map((moduleName) => this.load(moduleName))
  }

  append(module) {
    if (!this.state.equations) { return }

    var eqns = this.state.equations;
    eqns.push(module)
    this.setState({equations: eqns})
  }

  load(lib) {
    Loader(lib).then((module) => {
      this.append(module.default)
    });
  }

  render() {
    const eqns = this.state.equations.map((module) => <Equation config={module}/>)
    return (<div>{eqns} </div>)
  }

}

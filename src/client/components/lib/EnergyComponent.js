import React, { Component } from 'react';
import './style.css';
import {XYPlot, LineSeries} from 'react-vis';

class EnergyComponent extends Component {
  render() {

    return (
      <div className="App">
        <XYPlot height={300} width={300}>
          <LineSeries data={this.props.logs} />
        </XYPlot>
      </div>
    );
  }
}

export default EnergyComponent;

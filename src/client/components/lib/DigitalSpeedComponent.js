import React, { Component } from 'react'
import ReactSpeedometer from "react-d3-speedometer";

class SpeedometerComponent extends Component {
	render() {
		return (
			<div className="vehicle__digital-speedometer">
				<span className="vehicle__digital-speed">{this.props.speed} km/h</span>
			</div>
		)
	}
}

export default SpeedometerComponent

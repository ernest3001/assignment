import React, { Component } from 'react'
import ReactSpeedometer from "react-d3-speedometer";

class SpeedometerComponent extends Component {
	render() {
		return (
			<div style={{
	    width: "500px",
	    height: "300px",
			margin: "auto",
			display: "block",
	    background: "fff"
	}}>
	    <ReactSpeedometer
	        fluidWidth={true}
	        minValue={0}
	        maxValue={80}
	        value={this.props.speed}
	        needleColor="grey"
					startColor="#effafc"
					endColor="#182848"
					ringWidth="30"
					textColor="#3b3b3b"
					segments="20"
					needleTransition="easeQuadInOut"
	    />
	</div>
		)
	}
}

export default SpeedometerComponent

import React, { Component } from 'react'

class LogoComponent extends Component {



	render() {
		return (

		<div className='vehicle__dashboard-header'>
			<p className='viri-speed'>Energy: <span className="vehicle__data-info">{this.props.energy} kWh</span> </p>
			<p className='viri-speed'>Distanse: <span className="vehicle__data-info">{this.props.odo} kilometers</span></p>
			<p className='viri-speed'>Battery: <span className="vehicle__data-info">{this.props.soc}%</span> </p>
			<p className='viri-speed'><span className="vehicle__data-info">{this.props.speed} km/h</span></p>
		</div>
		)
	}
}

export default LogoComponent

import React, { Component } from 'react'

class LogoComponent extends Component {



	render() {
		return (

		<div className='vehicle__dashboard-header'>
			<p className='vehicle__dashboard-right'>Energy: <span className="vehicle__data-info">{this.props.energy} kWh</span> </p>
			<p className='vehicle__dashboard-right'>Distanse: <span className="vehicle__data-info">{this.props.odo} kilometers</span></p>
			<p className='vehicle__dashboard-right'>Battery: <span className="vehicle__data-info">{this.props.soc}%</span> </p>
			<p className='vehicle__dashboard-right'><span className="vehicle__data-info">{this.props.speed} km/h</span></p>
		</div>
		)
	}
}

export default LogoComponent

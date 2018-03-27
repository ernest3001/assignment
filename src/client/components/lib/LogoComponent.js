import React, { Component } from 'react'

class LogoComponent extends Component {



	render() {
		return (

		<div className='vehicle__dashboard-header'>
			<div className='viri-speed'>Driver name: <span className="vehicle__data-info">{this.props.name}</span></div>
			<div className='viri-speed'>Time: <span className="vehicle__data-info">{this.props.time}</span></div>
			<div className='viri-speed'>Latitude:: <span className="vehicle__data-info">{this.props.lat}</span></div>
			<div className='viri-speed'>Longtitude: <span className="vehicle__data-info">{this.props.lon}</span></div>
		</div>
		)
	}
}

export default LogoComponent

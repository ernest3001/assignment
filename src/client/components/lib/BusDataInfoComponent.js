import React, { Component } from 'react'

class BusDataInfoComponent extends Component {
	render() {
		return (

		<div className='vehicle__dashboard-header'>
			<div className='vehicle__data-panel'>Driver name: <span className="vehicle__data-info">{this.props.name}</span></div>
			<div className='vehicle__data-panel'>Time: <span className="vehicle__data-info">{this.props.time}</span></div>
			<div className='vehicle__data-panel'>Latitude:: <span className="vehicle__data-info">{this.props.lat}</span></div>
			<div className='vehicle__data-panel'>Longtitude: <span className="vehicle__data-info">{this.props.lon}</span></div>
		</div>
		)
	}
}

export default BusDataInfoComponent

import React, { Component } from 'react'

class LogoComponent extends Component {



	render() {
		return (

		<div className='vehicle__dashboard-header'>
			<p className='viri-speed'>Name: {this.props.name}</p>
			<p className='viri-speed'>Energy: {this.props.energy}</p>
			<p className='viri-speed'>time: {this.props.time}</p>
			<p className='viri-speed'>Gps: {this.props.gps}</p>
			<p className='viri-speed'>Latitude:: {this.props.lat}</p>
			<p className='viri-speed'>Longtitude: {this.props.lon}</p>
			<p className='viri-speed'>Distanse: {this.props.odo}</p>
			<p className='viri-speed'>Battery: {this.props.soc}</p>
		</div>
		)
	}
}

export default LogoComponent

import React, { Component } from 'react'

import Header from './lib/Header.js'
import BusDataInfoComponent from './lib/BusDataInfoComponent.js'
import LiveDataLogComponent from './lib/LiveDataLogComponent.js'
// Adding GoogleMaps:
import MapComponent from './lib/MapComponent.js'
// Add SpeedComponent
import SpeedComponent from './lib/SpeedComponent.js'
import DigitalSpeedComponent from './lib/DigitalSpeedComponent.js'
import BusDataComponent from './lib/BusDataComponent.js'


class App extends Component {
	state = {
		logs: [],
		name: 'Ernest',
		time: 0,
		speed: 0,
		lat: 0,
		lon: 0,
		gps: 0,
		odo: 0,
		energy: 0,
		center: {lat: 52.083737, lng: 5.125597},
		kmh: 'kmh'
	}

	componentDidMount() {
		// Save data in state on data event
		this.props.socket.on('state', (state) => {
			this.setState({
				logs: this.state.logs.concat([state]),
				time: state.time,
				speed: state.speed,
				lat: state.gps[0],
				lon: state.gps[1],
				odo: Math.round(state.odo * 100) / 100,
				soc: Math.round(state.soc * 100) / 100,
				gps: state.gps,
				energy: Math.round(state.energy * 100) / 100,
				center: { lat: state.gps[0], lng: state.gps[1]},
				kmh: state.kmh
			 })
		})
	}

	render() {
		return (
			<section>
				<article id='app-container'>
					<Header/>
					<div className="row">
			    <div className="vehicle__dashboard-data-panel"><BusDataInfoComponent
					 name={this.state.name}
					 logs={ this.state.logs}
					 time={this.state.time}
					 gps={this.state.gps}
					 lat={this.state.lat}
					 lon={this.state.lon}
					 /></div>
			    <div className="vehicle__speedometer-panel"><SpeedComponent speed={this.state.speed}/></div>
			    <div className="digital-speed"><DigitalSpeedComponent speed={this.state.speed}/></div>
			    <div className="vehicle__dashboard-data-panel"><BusDataComponent
					speed={this.state.speed}
					odo={this.state.odo}
					soc={this.state.soc}
					energy={this.state.energy}/></div>
					</div>
					</article>
					<MapComponent
					lat={this.state.lat}
					lon={this.state.lon}
					center={this.state.center}
					/>
					<article id='log-container'>
					<LiveDataLogComponent logs={ this.state.logs } />
				</article>
			</section>
		)
	}
}

export default App

import React, { Component } from 'react'

class LiveDataLogComponent extends Component {
	render() {
		return (
			<div className='vehicle__live-data'>
				{
					// Show data with newest object on top
					this.props.logs.reverse().map((log, i) =>
					<div>
						<p key={log.odo}>{ JSON.stringify(log) }</p>
					</div>
					)
				}
			</div>
		)
	}
}

export default LiveDataLogComponent

import React, { Component } from 'react';

import { container } from './volumeDisplayCSS';
import VolumeKnob from './VolumeKnob';

class VolumeDisplay extends Component {
	constructor(props) {
		super(props)
		this.state = {
			maxVolume: 10,
			minVolume: -10,
			volumeLevel: 0,
		};
	};



	render() {
		const { volumeLevel } = this.state;
		// const style = Object.assign(colorMode, container);

		return (
			<section>
				<div>
					Volume:
				</div>
				<div>
					<VolumeKnob volumeLevel={ volumeLevel } />
				</div>
			</section>
		);
	};
};

export default VolumeDisplay;
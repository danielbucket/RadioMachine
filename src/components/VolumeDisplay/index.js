import React, { Component } from 'react';
import VolumeKnob from './VolumeKnob';
import { VolumeDisplayStyle } from './VolumeDisplayStyle';

class VolumeDisplay extends Component {
	constructor(props) {
		super(props)
		this.state = {
			maxVolume: 10,
			minVolume: -10,
			currentVolume: -3,
		};
	};

	render() {
		const { currentVolume } = this.state;

		return (
			<VolumeDisplayStyle>
				<div className="volume">
					Volume:<span className="vol-span">{ currentVolume }</span>
				</div>
				<VolumeKnob />
			</VolumeDisplayStyle>
		);
	};
};

export default VolumeDisplay;
import React, { Component } from 'react';
import { RadioDeckStyle } from './RadioDeckStyle';
import { Knob } from './VolumeKnob';
import RadioDeckHeader from './RadioDeckHeader';

class RadioMachine extends Component {
	constructor(props) {
		super(props)
		this.state = {
			maxVolume: 10,
			minVolume: -10,
			currentVolume: 0,
		};
	};
	render() {

		return(
			<RadioDeckStyle>
				<RadioDeckHeader />
			</RadioDeckStyle>
		);
	};
};

export default RadioMachine;
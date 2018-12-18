import React, { Component } from 'react';
import { RadioMachineStyle } from './RadioMachineStyle';
import { VolumeKnob } from '../VolumeKnob';

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
			<RadioMachineStyle>
			<VolumeKnob />
				{this.state.currentVolume}
			</RadioMachineStyle>
		);
	};
};


export default RadioMachine;
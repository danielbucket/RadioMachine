import React, { Component } from 'react';
import { RadioDeckStyle } from './RadioDeckStyle';
import DialsAndMeters from './DialsAndMeters';
import SoundLevels from './SoundLevels';
import MusicStats from './MusicStats';
import TapeDeck from './TapeDeck';

class RadioMachine extends Component {
	constructor(props) {
		super(props)
		this.state = {
			volume: 5,
			bass: 7,
			treble: 11,
		};
	};

	render() {
		const { volume, bass, treble, } = this.state;

		return(
			<RadioDeckStyle>
				<DialsAndMeters />
				<SoundLevels volume={volume}
											bass={bass}
											treble={treble}/>
				<MusicStats />
				<TapeDeck />
			</RadioDeckStyle>
		);
	};
};

export default RadioMachine;
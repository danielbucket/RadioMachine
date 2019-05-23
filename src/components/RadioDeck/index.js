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
			volume: 3,
			maxVolume: 9,
			bass: 7,
			maxBass: 9,
			treble: 5,
			maxTreble: 9,
		};
	};

	render() {
		const { maxVolume, volume,
						maxBass, bass,
						maxTreble, treble,
					} = this.state;

		return(
			<RadioDeckStyle>
				<DialsAndMeters />	
				<SoundLevels volume={volume}
											maxVolume={maxVolume}
											bass={bass}
											maxBass={maxBass}
											treble={treble}
											maxTreble={maxTreble}/>
				<MusicStats />
				<TapeDeck />
			</RadioDeckStyle>
		);
	};
};

export default RadioMachine;
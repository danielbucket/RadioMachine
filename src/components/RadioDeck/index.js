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
			maxVolume: 20,
			volume: 5,
			maxBass: 20,
			bass: 7,
			maxTreble: 20,
			treble: 11,
		};
	};

	render() {
		const { maxVolume, volume,
						maxBass, bass,
						maxTreble, treble
					} = this.state;

		return(
			<RadioDeckStyle>
				<DialsAndMeters />
				<SoundLevels maxVolume={maxVolume}
											volume={volume}
											maxBass={maxBass}
											bass={bass}
											maxTreble={maxTreble}
											treble={treble}/>
				<MusicStats />
				<TapeDeck />
			</RadioDeckStyle>
		);
	};
};

export default RadioMachine;
import React, { Component } from 'react';
import { SoundLevelsStyle, IndicatorLight } from './SoundLevelsStyle';

class SoundLevels extends Component {
	constructor(props) {
		super(props);

		this.createLightBar = this.createLightBar.bind(this);
	};

	componentWillMount() {
		const { maxVolume, volume,
						maxBass, bass,
						maxTreble, treble,
					} = this.props;

		this.setState({
			maxVolume: maxVolume,
			volume: volume,
			maxBass: maxBass,
			bass: bass,
			maxTreble: maxTreble,
			treble: treble,
		});
	};

	createLightBar(value, levelType) {
		const barArray = [];
		let valid = true;

		for (let i=0; i<=value; i++) {
			if (i > valid) {
				valid = false;
			};

			barArray.push(
				<IndicatorLight key={i}
							className={levelType+"-bar"}
							valid={valid} >
				{i}
				</IndicatorLight>
			);
		};

		return barArray;
	};

	render() {	
		const { maxVolume, volume,
						maxBass, bass,
						maxTreble, treble,
					} = this.state;

		const volumeBars = this.createLightBar(volume,'volume');
		const bassBars = this.createLightBar(bass,'bass');
		const trebleBars = this.createLightBar(treble,'treble');

		return (
			<SoundLevelsStyle maxVolume={maxVolume}>
			{ volumeBars }
			{ bassBars }
			{ trebleBars }
			</SoundLevelsStyle>
		)
	}
};

export default SoundLevels;
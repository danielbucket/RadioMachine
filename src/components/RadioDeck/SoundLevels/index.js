import React, { Component } from 'react';
import {	SoundLevelsStyle,
					IndicatorLightStyle,
					IndicatorContainerStyle } from './SoundLevelsStyle';

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

	createLightBar(value, indicatorType) {
		const indicatorArray = [];
		let isValid = true;

		for (let i=0; i<=value; i++) {
			indicatorArray.push(
				<IndicatorLightStyle key={i}
							className={indicatorType+"-bar"}
							indicatorType={indicatorType}>
				</IndicatorLightStyle>
			);
		};

		return (
			<IndicatorContainerStyle>
				<div className="indicator-type">{indicatorType}:</div>
				<div className="indicator-bar">{indicatorArray}</div>
			</IndicatorContainerStyle>
		);
	};

	render() {	
		const { volume, bass, treble, } = this.state;

		const volumeBars = this.createLightBar(volume,'volume');
		const bassBars = this.createLightBar(bass,'bass');
		const trebleBars = this.createLightBar(treble,'treble');

		return (
			<SoundLevelsStyle>
				{ volumeBars }
				{ bassBars }
				{ trebleBars }
			</SoundLevelsStyle>
		);
	};
};

export default SoundLevels;
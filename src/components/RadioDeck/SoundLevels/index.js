import React, { Component } from 'react';
import {	SoundLevelsStyle,
					IndicatorLightStyle,
					IndicatorContainerStyle } from './SoundLevelsStyle';
import LightenDarkenColor from '../../../helpers/LightenDarkenColor';

class SoundLevels extends Component {
	constructor(props) {
		super(props);

		this.createLightBar = this.createLightBar.bind(this);
		this.changeValue = this.changeValue.bind(this);
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

	changeValue(type,value) {
		this.setState({[type]:value})
	};

	createLightBar(limitValue, userValue, indicatorType) {
		const indicatorArray = [];
		// user feedback will be needed in later iterations
		if (userValue > limitValue) {userValue = limitValue};

		for (let i=0; i<=limitValue; i++) {
			let maxVal = i.toString();
			if (i <= 9) {maxVal = i+"e"};
			const inputColor = "#ff"+maxVal+"1d";
			const newColor = LightenDarkenColor(inputColor, i);
			if (i > userValue) {newColor = "transparent"};

			const style = {"backgroundColor":newColor};

			indicatorArray.unshift(
				<div key={i}
							className={indicatorType+"-bar"}
							indicatortype={indicatorType}
							style={style}
							onClick={()=>this.changeValue(indicatorType,i)}>
					<div className="indicator-value"
								style={style}>{i}</div>
				</div>
			);
		};

		return (
			<IndicatorContainerStyle indicatorValue={limitValue+1}
																indicatortype={indicatorType}>
				<div className="indicator-bar">{indicatorArray}</div>
				<div className="indicator-type">{indicatorType}</div>
			</IndicatorContainerStyle>
		);
	};

	render() {	
		const { volume, maxVolume,
						bass, maxBass,
						treble, maxTreble, } = this.state;

		const volumeBars = this.createLightBar(maxVolume, volume, 'volume');
		const bassBars = this.createLightBar(maxBass, bass, 'bass');
		const trebleBars = this.createLightBar(maxTreble, treble, 'treble');

		return (
			<SoundLevelsStyle >
				{ volumeBars }
				{ bassBars }
				{ trebleBars }
			</SoundLevelsStyle>
		);
	};
};

export default SoundLevels;
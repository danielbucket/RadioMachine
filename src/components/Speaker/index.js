import React from 'react';
import { SpeakerStyle, speakerPostition } from './SpeakerStyle';


const Speaker = props => {
	return (
		<SpeakerStyle style={speakerPostition(props)} levels={props.levels}>
			<div className="tweeter-container">
				<div className="tweeters tweeter-1"></div>
				<div className="tweeters tweeter-2"></div>
			</div>
			<div className="woofer"></div>
		</SpeakerStyle>
	);
};

export default Speaker;
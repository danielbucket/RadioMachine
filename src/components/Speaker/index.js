import React from 'react';
import { SpeakerStyle, speakerPostition } from './SpeakerStyle';

const Speaker = props => {
	return (
		<SpeakerStyle style={speakerPostition(props)}>
			{props.position}
		</SpeakerStyle>
		);
};

export default Speaker;
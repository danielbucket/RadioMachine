import React from 'react';
import { SpeakerStyle, speakerPostition } from './SpeakerStyle';
// import { Knob } from '../Knob';

const Speaker = props => {
	const { mouseEvent } = props;
	return (
		<SpeakerStyle style={speakerPostition(props)} levels={props.levels}>
			{ props.position }

		</SpeakerStyle>
		);
};

export default Speaker;
import React from 'react';
import { SpeakerStyle } from './SpeakerStyle';

const Speaker = props => {
	const style = {gridArea: `radio / ${props.position}`};

	return (
		<SpeakerStyle style={style}>
			Speaker
		</SpeakerStyle>
		);
};

export default Speaker;
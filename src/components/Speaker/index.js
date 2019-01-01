import React from 'react';
import { SpeakerStyle, speakerPostition } from './SpeakerStyle';

const Speaker = props => {
	const { mouseEvent } = props;
	return (
		<SpeakerStyle style={speakerPostition(props)} levels={props.levels}>
			{ props.position }
			<div 	className="bass-speaker"
							onClick={(i) => mouseEvent(i)}
							onDragOver={e => this.onDragOver(e)}
							draggable
			>drag from here
			</div>
			<div 	className="bass-speaker"
							onDragOver={i => console.log(i)}
							onDrop={e => this.onDrop(e)}
			>drop here </div>
		</SpeakerStyle>
		);
};

export default Speaker;
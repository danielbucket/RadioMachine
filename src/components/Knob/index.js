import React, { Component } from 'react';
import KnobStyle from './KnobStyle';

class Knob extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dragStartX: 0,
			dragStartY: 0,
			volumeLevel: 0,
		};

		this.onDragOver = this.onDragOver.bind(this);
		this.onDragStart = this.onDragStart.bind(this);
		this.onDrag = this.onDrag.bind(this);
		this.onDragEnd = this.onDragEnd.bind(this);
	};

	onDragOver(e) {
		e.preventDefault();
	};

	onDragStart(e) {
		this.setState({
			dragStartX: e.clientX,
			dragStartY: e.clientY,
		});
	};

	onDrag(e) {
		const { dragStartX, dragStartY } = this.state;

		const movement = {
			movementX: (dragStartX - e.clientX),
			movementY: (dragStartY - e.clientY),
		};

		return movement;
	};

	onDragEnd(e) {
		const changeDiff = this.onDrag(e);

		this.setState({
			volumeLevel: changeDiff
		});
	};

	render() {
		const { volumeLevel } = this.state;
		
		return (
			<KnobStyle onDragStart={e => this.onDragStart(e)}
									onDrag={e => this.onDrag(e)}
									onDragEnd={e => this.onDragEnd(e)}
									draggable>
				{volumeLevel}
			</KnobStyle>
		);
	}
};

export default Knob;
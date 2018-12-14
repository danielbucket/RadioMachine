import React, { Component } from 'react';

class VolumeKnob extends Component {
	render() {
	const { volumeLevel } = this.props;

	return(
		<div>
			<div>
				{ volumeLevel }
			</div>
		</div>
		);
	};
};

export default VolumeKnob;
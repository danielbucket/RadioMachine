import React, { Component } from 'react';
import ColorModeButtonStyle from './ColorModeButtonStyle';

class ColorModeSelector extends Component {
	constructor(props) {
		super(props)
	};

	render() {
		return (
			<div>
				<ColorModeButtonStyle 
						value='lightMode'
		        onClick={(i) => this.props.setColorMode(i)}>
			    LightMode
	      </ColorModeButtonStyle>
				<ColorModeButtonStyle 
						value='darkMode'
		        onClick={(i) => this.props.setColorMode(i)}>
			    DarkMode
	      </ColorModeButtonStyle>
      </div>
		)
	};
};

export default ColorModeSelector;
import React, { Component } from 'react';
import ColorModeButtonStyle from './ColorModeButtonStyle';

export const ColorModeSelector = props => {
	return (
		<div>
			<ColorModeButtonStyle 
					value='lightMode'
	        onClick={(i) => props.setColorMode(i)}>
		    LightMode
      </ColorModeButtonStyle>
			<ColorModeButtonStyle 
					value='darkMode'
	        onClick={(i) => props.setColorMode(i)}>
		    DarkMode
      </ColorModeButtonStyle>
    </div>
	)
};




export default ColorModeSelector;
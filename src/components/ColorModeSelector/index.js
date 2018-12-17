import React from 'react';
import { ColorModeButtonStyle } from './ColorModeButtonStyle';

export const ColorModeSelector = props => {
	const value = props.colorMode ? 'Light Mode' : 'Dark Mode';

	return (
		<div>
			<ColorModeButtonStyle 
	        onClick={() => props.setColorMode()}>
		    {value}
      </ColorModeButtonStyle>
    </div>
	)
};

export default ColorModeSelector;
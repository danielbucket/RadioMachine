import React from 'react';
import ColorModeButtonStyle from './ColorModeButtonStyle';

export const ColorModeSelector = props => {
	const value = props.colorMode ? 'Dark Mode' : 'Light Mode';

	return (
		<ColorModeButtonStyle 
        onClick={() => props.setColorMode()}>
      <span className="volume-level-text">{value}</span>
    </ColorModeButtonStyle>
	)
};

export default ColorModeSelector;
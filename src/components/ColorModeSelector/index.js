import React from 'react';
import { ColorModeSelectorStyle } from './ColorModeSelectorStyle';

export const ColorModeSelector = props => {
	const value = props.colorMode ? 'Dark Mode' : 'Light Mode';

	return (
		<ColorModeSelectorStyle 
        onClick={() => props.setColorMode()}>
      <span className="volume-level-text">{value}</span>
    </ColorModeSelectorStyle>
	)
};

export default ColorModeSelector;
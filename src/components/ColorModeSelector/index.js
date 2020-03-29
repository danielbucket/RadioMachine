import React from 'react';
import { ColorModeSelectorStyle } from './ColorModeSelectorStyle';

export const ColorModeSelector = props => {
	const { themes } = props.globalTheme;
	const themeSelections = Object.keys(themes).map(theme => {
		const themeName = themes[theme].themeName;

		return (
			<a key={theme} 
				 style={themes[theme]}
				 onClick={()=>props.setColorScheme(theme)}
				 className="color-mode-selection">
				 {themeName}
			</a>
		);
	});

	const themeQuantity = themeSelections.length;

	return (
		<ColorModeSelectorStyle themeQuantity={themeQuantity}>
			<a className="color-mode-selection drop-menu-cover">Selections</a>
			{themeSelections}
    </ColorModeSelectorStyle>
	);
};

export default ColorModeSelector;
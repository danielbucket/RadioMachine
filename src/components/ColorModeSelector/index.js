import React from 'react';
import { ColorModeSelectorStyle } from './ColorModeSelectorStyle';

export const ColorModeSelector = props => {
	const { themes } = props.globalTheme;
	const themeSelections = Object.keys(themes).map(modeName=>{
		return (
			<div key={modeName} 
						style={themes[modeName]}
					onClick={()=>props.setColorScheme(modeName)}
				className="volume-level-text">
				{modeName}
			</div>
		);
	});

	const themeQuantity = themeSelections.length;
	return (
		<ColorModeSelectorStyle themeQuantity={themeQuantity}>
				{themeSelections}
    </ColorModeSelectorStyle>
	);
};

export default ColorModeSelector;
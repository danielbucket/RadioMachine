import React, { Component } from 'react';
import ColorModeSelector	from '../ColorModeSelector';
import { DropdownMenuStyle } from './DropdownMenuStyle';


class DropdownMenu extends Component {
	constructor(props) {
		super(props);
		this.state={};

		this.populateMenu = this.populateMenu;
	};

	populateMenu() {
		return 'populateMenu()'
	};


	render() {
		const { setColorScheme, globalTheme } = this.props;

		return (
			<DropdownMenuStyle>
				DropdownMenu
				<ColorModeSelector setColorScheme={setColorScheme}
													    globalTheme={globalTheme} />
			</DropdownMenuStyle>
		);
	};
};

export default DropdownMenu;
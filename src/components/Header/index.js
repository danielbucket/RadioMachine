import React, { Component } from 'react';
import ColorModeSelector from '../ColorModeSelector';
import { HeaderStyle } from './HeaderStyle';

class Header extends Component {
	constructor(props) {
		super(props)
		this.state = {};
	};


	render() {
		const { globalTheme, setColorScheme } = this.props;

		return (
			<HeaderStyle>
				<div className="options-bar">
					<button className="options-bar-selection">Home</button>
					<button className="options-bar-selection">About</button>
					<button className="options-bar-selection">GitHub</button>
					<button className="options-bar-selection">Login/Signup</button>
				</div>
        <ColorModeSelector setColorScheme={setColorScheme}
                      	 			globalTheme={globalTheme} />
			</HeaderStyle>
		);
	};
};

export default Header;
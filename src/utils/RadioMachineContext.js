import React, { Component } from 'react';
import styled from 'styled-components';

// first make a new context...
const AppContext = React.createContext();

// then create a provider component. 
class RadioMachineContext extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ScrollBar: styled.div`
				overflow-x: hidden;
				overflow: auto;
				::-webkit-scrollbar {
					width: 4px;
					background-color: ${p=>p.theme.backgroundColor};
				}

				::-webkit-scrollbar-thumb {
					background: ${p=>p.theme.borderColor};
				}`,
		};
	};

	render() {
		return (
			<AppContext.Provider value={this.state} >
				{ this.props.children }
		 	</AppContext.Provider >
	 	);
	};
};

export default RadioMachineContext;

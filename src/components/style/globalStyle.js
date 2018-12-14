import { createGlobalStyle } from 'styled-components';
import { colorMode } from './colorMode';

const mode = colorMode();
const setGlobalStyles = () => 
	createGlobalStyle`
		* {
			box-sizing: border-box;
			background-color: ${mode.backgroundColor};
			border: ${mode.border};
			min-height: 100vh;
		}
`;

export default setGlobalStyles;
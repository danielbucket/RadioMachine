import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	html {
	  font-size: 62.5%;
	  box-sizing: border-box;
	  font-family: 'Bitter', serif;
	  height: 100%;
	}

	*,
	*:before,
	*:after {
		box-sizing: inherit;
		margin: 0;
	}

	body {
		
	}
`;
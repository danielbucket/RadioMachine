import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	html {
	  font-size: 62.5%;
	  box-sizing: border-box;
	  font-family: 'Bitter', serif;
	}

	*,
	*:before,
	*:after {
		box-sizing: inherit;
		margin: 0;
		outline: none;
		height: 100%;
		grid-gap: .5em;
	}

	body {}
`;
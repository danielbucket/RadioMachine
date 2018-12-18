import styled from 'styled-components';

export const AppStyle = styled.div`
	background: ${p => p.theme.background};
	color: ${p => p.theme.fontColor};
	padding: .3em;

	display: grid;
	grid-template-rows: auto 4em;

	footer {
		grid-row: 2 / 2;

		display: grid;
		grid-template-columns: repeat(4, auto);
	}
`;
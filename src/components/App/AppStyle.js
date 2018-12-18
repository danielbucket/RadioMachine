import styled from 'styled-components';

export const AppStyle = styled.div`
	background: ${p=>p.theme.background};
	color: ${p=>p.theme.fontColor};
	padding: .2em;

	display: grid;
	grid-template-rows:
		[header] 4em
		[radio] 40em
		[body] auto
		[footer] 4em;
	grid-template-columns: repeat(5, 25fr);
	
	header:  {
		grid-row: 1 / span 4;
	}

	footer {
		grid-row: 4 / 4;
		grid-column: 1 / span 5;

		display: grid;
		grid-template-columns: repeat(4, 25fr);
	}
`;
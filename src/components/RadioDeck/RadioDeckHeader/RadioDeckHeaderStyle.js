import styled from 'styled-components';

export const RadioDeckHeaderStyle = styled.div`
	grid-row: 1 / span 2;
	grid-column: 1 / span 5;
	place-self: center;
	
	color: ${p=>p.theme.fontColor};
	font-family: ${p=>p.theme.mainFont};
	font-size: 11vw;
	letter-spacing: .75rem;


	@media(min-width:${p=>p.theme.minWidthMdScreen}) {
		font-size: 5rem;
	}
`;
import styled from 'styled-components';

export const RadioDeckStyle = styled.div`
	grid-column: 1 / span 3;
	border: 5px solid ${p=>p.theme.borderColor};

	display: grid;
	grid-template-rows: 
		[dialsAndMeters] 	1fr
		[soundLevels] 		1.5fr
		[musicStats] 			1.5fr
		[tapeDeck] 				3fr;


	@media(min-width:${p=>p.theme.minWidthMdScreen}) {
		grid-column: 2 / 2;
	}

	@media(min-width:${p=>p.theme.minWidthLgScreen}) {

	}
`;
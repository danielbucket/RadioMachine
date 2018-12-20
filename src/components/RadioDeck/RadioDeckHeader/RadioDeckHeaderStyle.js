import styled from 'styled-components';

export const RadioDeckHeaderStyle = styled.div`
	grid-column: 1 / span 5;
	place-self: center;
	display: flex;
	align-items: center;

	color: ${p=>p.theme.fontColor};
	font-size: 5em;
	font-family: 'ZCOOL QingKe HuangYou', cursive;
	letter-spacing: .15em;
`;
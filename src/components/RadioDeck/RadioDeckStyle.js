import styled from 'styled-components';

export const RadioDeckStyle = styled.div`
	grid-column: 1 / span 3;
	border: .5em solid ${p=>p.theme.borderColor};

	display: grid;
	grid-template-rows: repeat(8, 1fr);
	grid-template-columns: repeat(5, 1fr);

	max-width: 450px;
	min-width: 400px;

	@media(min-width:450px) {
		justify-self: center;
	}

	@media(min-width:800px) {
		grid-column: 2 / 2;
	}
`;
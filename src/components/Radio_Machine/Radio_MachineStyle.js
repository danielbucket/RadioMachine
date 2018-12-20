import styled from 'styled-components';

export const Radio_MachineStyle = styled.div`
	background: ${p=>p.theme.background};
	color: ${p=>p.theme.fontColor};
	padding: .2em;

	display: grid;
	grid-template-rows:
		[header] 6em
		[radio] 50em
		[partition] auto
		[footer] 8em;
	grid-template-columns:
		[speakerR] 25fr
		[deck] 50fr
		[speakerL] 25fr;
	
	header {
		grid-row: 1 / 1;
		grid-column: 1 / span 3;

		border: 1px solid #bfa520;
	}

	.partition {
		grid-row: 3 / 3;
		grid-column: 1 / span 3;

		border: 2px solid ${p=>p.theme.borderColor};
	}

	footer {
		grid-row: 4 / 4;
		grid-column: 1 / span 3;

		display: grid;
		grid-template-columns: repeat(2, 50fr);
		grid-template-rows: repeat(2, 50fr);
	}

	@media(min-width:450px) {
		grid-template-rows:
			[header] 8em
			[radio] 50em
			[partition] auto
			[footer] 4em;

		footer {
			grid-template-columns: repeat(4, 25fr);
			grid-template-rows: none;
		}

	}

	@media(min-width:800px) {

	}
`;
import styled from 'styled-components';

export const Radio_MachineStyle = styled.div`
	background: ${p=>p.theme.background};
	color: ${p=>p.theme.fontColor};
	padding: 2px;

	display: grid;
	grid-template-rows:
		[header] 60px
		[radio] 500px
		[partition] auto
		[footer] 80px;
	grid-template-columns:
		[speakerR] auto
		[deck] minmax(300px, 400px)
		[speakerL] auto;

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
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, 1fr);
	}

	@media(min-width:${p=>p.theme.minWidthMdScreen}) {
		grid-template-rows:
			[header] 80px
			[radio] 500px
			[partition] auto
			[footer] 40px;

		footer {
			grid-template-columns: repeat(4, 25fr);
			grid-template-rows: none;
		}

	}

	@media(min-width:${p=>p.theme.minWidthLgScreen}) {

	}
`;
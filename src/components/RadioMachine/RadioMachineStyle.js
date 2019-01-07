import styled from 'styled-components';

export const RadioMachineStyle = styled.div`
	background: ${p=>p.theme.background};
	color: ${p=>p.theme.fontColor};
	padding: 2px;
	min-height: 100vh;

	display: grid;
	grid-template-columns:
		[speakerR] auto
		[deck] minmax(300px, 350px)
		[speakerL] auto;
	grid-template-rows:
		[header] 60px
		[radio] 500px
		[collection] minmax(auto,150px)
		[footer] 80px;

	header {
		grid-row: 1 / 1;
		grid-column: 1 / span 3;

		border: 1px solid #bfa520;
	}

	footer {
		grid-row: 4 / 4;
		grid-column: 1 / span 3;

		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, 1fr);
	}

	@media(min-width:${p=>p.theme.minWidthMdScreen}) {
		grid-template-columns:
			[speakerR] auto
			[deck] 450px
			[speakerL] auto;
		grid-template-rows:
			[header] 60px
			[radio] 500px
			[collection] auto
			[footer] 40px;

		footer {
			grid-template-columns: repeat(4, 25fr);
			grid-template-rows: none;
		}
	}

	@media(min-width:${p=>p.theme.minWidthLgScreen}) {

	}

	@media(min-height:${p=>p.theme.minHeightLgScreen}) {
		grid-template-columns:
			[speakerR] auto
			[deck] 800px
			[speakerL] auto;
		grid-template-rows:
			[header] 60px
			[radio] 700px
			[collection] minmax(auto,150px)
			[footer] 80px;
	}
`;
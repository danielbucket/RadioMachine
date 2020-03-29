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
		[Header] 40px
		[radio] 500px
		[collection] minmax(auto,150px)
		[Footer] 80px;


	@media(min-width:${p=>p.theme.minWidthMdScreen}) {
		grid-template-columns:
			[speakerR] auto
			[deck] 450px
			[speakerL] auto;
		grid-template-rows:
			[Header] 40px
			[radio] 500px
			[collection] auto
			[Footer] 40px;

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
			[Header] 40px
			[radio] 650px
			[collection] auto
			[Footer] 60px;
	}
`;
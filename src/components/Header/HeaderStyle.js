import styled from 'styled-components';

export const HeaderStyle = styled.div`
	grid-row: Header;
	grid-column: 1 / span 3;

	display: grid;
	grid-template-columns:
		[Options_Bar] calc(100% - 80px)
		[ColorModeSelector] 80px;


	.options-bar {
		grid-column: Options_Bar;
		height: 100%;

		display: grid;
		grid-template-columns: repeat(4, 1fr);
	}

	.options-bar-selection {
		text-align: center;
	}

`;
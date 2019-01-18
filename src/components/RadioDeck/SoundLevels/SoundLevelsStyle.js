import styled from 'styled-components';

export const SoundLevelsStyle = styled.div`
	grid-row: soundLevels;

	border: 1px solid red;

	display: grid;
	grid-template-columns:
		[volume] 	1fr
		[bass] 		1fr
		[treble] 	1fr;
`;

export const IndicatorContainerStyle = styled.div`
	display: grid;
	grid-template-rows:
		[indicatorBar] 9fr;
		[indicatorType] 1fr;

	.indicator-type {
		grid-row: indicatorType;
		color: ${p=>p.theme.fontColor};
		font-family: ${p=>p.theme.mainFont};

	}

	.indicator-bar {
		grid-row: indicatorBar;

		border: 1px solid white;

		display: grid;
		grid-template-columns: repeat(25, 1fr);
	}
`;

export const IndicatorLightStyle = styled.div`
	grid-row: ${p=>p.indicatorType};

	.volume-bar {
		border: 1px solid teal;
	}

	.bass-bar {
		border: 1px solid gold;
	}

	.treble-bar {
		border: 1px solid lime;
	}
`;
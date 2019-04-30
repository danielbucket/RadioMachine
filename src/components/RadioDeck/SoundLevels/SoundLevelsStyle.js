import styled from 'styled-components';

export const SoundLevelsStyle = styled.div`
	grid-row: soundLevels;

	display: grid;
	grid-template-columns:
		[volume] 	1fr
		[bass] 		1fr
		[treble] 	1fr;
`;

export const IndicatorContainerStyle = styled.div`
	grid-row: ${p=>p.indicatorType};

	text-align: center;

	display: grid;
	grid-template-rows:
		[indicatorBar] 9fr
		[indicatorType] 1fr;



	.indicator-bar {
		grid-row: indicatorBar;

		border: 1px solid ivory;

		display: grid;
		grid-template-columns: repeat(${p=>p.indicatorValue}, 1fr);
	}

	.indicator-type {
		grid-row: indicatorType;
	}



	.volume-bar {
		display: flex;
		align-items: flex-end;
		justify-content: center;

		background-color: ${p=>p.backColor};
	}

	.bass-bar {
		display: flex;
		align-items: flex-end;
		justify-content: center;

		background-color: ${p=>p.backColor};
	}

	.treble-bar {
		display: flex;
		align-items: flex-end;
		justify-content: center;
		background-color: ${p=>p.backColor};
	}

	.bar-value-01 {
		background-color: red;

	}

	.indicator-value {

		font-family: ${p=>p.theme.mainFont}
	}

	.indicator-type {
		grid-row: indicatorType;
		color: ${p=>p.theme.fontColor};
		font-family: ${p=>p.theme.mainFont};
		background-color: ivory;
		text-align: center;
	}
`;

export const IndicatorLightStyle = styled.div`
	grid-row: ${p=>p.indicatorType};

`;
//
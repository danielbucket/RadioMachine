import styled from 'styled-components';

export const SoundLevelsStyle = styled.div`
	grid-row: soundLevels;

	border: 1px solid red;

	display: grid;
	grid-template-columns: repeat(${p=>p.maxVolume}, 1fr);
	grid-template-rows:
		[volume] 	1fr
		[bass] 		1fr
		[treble] 	1fr;

	.volume-bar {
		grid-row: volume;
		border: 1px solid teal;
	}

	.bass-bar {
		grid-row: bass;
		border: 1px solid gold;
	}

	.treble-bar {
		grid-row: treble;
		border: 1px solid lime;
	}
`;

export const IndicatorLight = styled.div`
	background-color:${p=> p.valid ? 'red' : 'transparent'};
`;
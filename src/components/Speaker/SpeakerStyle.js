import styled from 'styled-components';

export const SpeakerStyle = styled.div`
	display: none;
	border: 1px solid ${p=>p.theme.borderColor};

	@media(min-width:${p=>p.theme.minWidthMdScreen}) {

	}
	
	@media(min-width:${p=>p.theme.minWidthLgScreen}) {
		display: grid;
		grid-template-rows:
			[tweeter] 40fr
			[woofer] 60fr;

		width: calc(100% - 80px);
		width: 200px;
		height: 300px;
		align-self: end;

		.tweeter-container {
			grid-row: tweeter;
			
			display: grid;
			grid-template-columns: 
				[tweeter-1] 1fr
				[tweeter-2] 1fr;
		}

		.twter {
			place-self: center;
			height: 75px;
			width: 75px;
			border: 1px solid yellow;
			border-radius: 50%;
		}

		.tweeter-1 {
			grid-column: tweeter-1;
		}

		.tweeter-2 {
			grid-column: tweeter-2;
		}

		.woofer {
			grid-row: woofer;
			place-self: center;

			height: 145px;
			width: 145px;
			border-radius: 50%;
			border: 1px solid ${p=>p.theme.borderColor};

		}
	}
`;

export const speakerPostition = props => {
	let align = 'end';
	let margin = 'marginRight';

	if (props.position === 'speakerL') {
		align = 'start'
		margin = 'marginLeft'
	};

	return {
		gridArea: `radio / ${props.position}`,
		justifySelf: align,
		[margin]: '10px',
	};
};
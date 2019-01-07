import styled from 'styled-components';

export const SpeakerStyle = styled.div`
	display: none;
	border: 1px solid ${p=>p.theme.borderColor};

	@media(min-width:700px) {
		display: grid;
		grid-template-rows:
			[tweeter] 60fr
			[woofer] 40fr;
		height: 300px;

		width: 90%;
		max-width: 200px;
		align-self: end;

		.tweeter-container {
			grid-row: tweeter;
			
			display: grid;
			grid-template-rows: 
				[tweeter-1] 1fr
				[tweeter-2] 1fr;
		}

		.tweeters {
			justify-self: center;
			height: 60px;
			width: 60px;
			border: 1px solid yellow;
			border-radius: 50%;
		}

		.tweeter-1 {
			grid-row: tweeter-1;
			
			align-self: end;
			margin-bottom: 5px;
		}

		.tweeter-2 {
			grid-row: tweeter-2;

			align-self: start;
			margin-top: 5px;
		}

		.woofer {
			grid-row: woofer;
			place-self: center;

			height: 80px;
			width: 80px;
			border-radius: 50%;
			border: 1px solid ${p=>p.theme.borderColor};
		}
	}
	
	@media(min-width:${p=>p.theme.minWidthLgScreen}) {
		grid-template-rows:
			[tweeter] 40fr
			[woofer] 60fr;

		.tweeter-container {
			grid-template-rows: none;
			grid-template-columns:
				[tweeter-1] 1fr
				[tweeter-2] 1fr;
		}

		.tweeter-1 {
			grid-column: tweeter-1;
			place-self: center;
			margin: 0;
		}

		.tweeter-2 {
			grid-column: tweeter-2;
			place-self: center;
			margin: 0;
		}

		.woofer {
			height: 120px;
			width: 120px;
		}
	}

	@media(min-height:${p=>p.theme.minHeightLgScreen}) {
		height: 400px;
		max-width: none;
		width: 300px;

		.tweeters {
			height: 120px;
			width: 120px;
		}

		.woofer {
			height: 200px;
			width: 200px;
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
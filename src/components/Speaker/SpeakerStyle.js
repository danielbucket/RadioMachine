import styled from 'styled-components';

export const SpeakerStyle = styled.div`
	display: none;
	border: 1px solid ${p=>p.theme.borderColor};

	@media(min-width:${p=>p.theme.minWidthMdScreen}) {

	}
	
	@media(min-width:${p=>p.theme.minWidthLgScreen}) {
		display: grid;
		grid-template-rows:
			[tweeter] 25fr
			[mid] 25fr
			[bass] 50fr;

		width: calc(100% - 80px);
		width: 200px;
		height: 300px;
		align-self: end;

		.bass-speaker {
			grid-row: bass;
			place-self: center;

			height: 40px;
			width: 40px;
			border-radius: 50%;
			border: 1px solid ${p=>p.theme.borderColor}

		}
	}
`;
			// ${p=>console.log(p)}

export const speakerPostition = props => {
	let align = 'end';
	if (props.position === 'speakerL') {
		align = 'start';
	};

	return {
		gridArea: `radio / ${props.position}`,
		justifySelf: align,
	}
};
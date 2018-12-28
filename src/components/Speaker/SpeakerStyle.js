import styled from 'styled-components';

export const SpeakerStyle = styled.div`
	display: none;
	border: 1px solid ${p=>p.theme.borderColor};

	@media(min-width:${p=>p.theme.minWidthMdScreen}) {

	}
	
	@media(min-width:${p=>p.theme.minWidthLgScreen}) {
		display: grid;

		width: calc(100% - 80px);
		max-width: 250px;
		height: 325px;
		align-self: end;
	}
`;

export const speakerPostition = props => {
	let align = 'end';
	if (props.position === 'speakerL') {
		align = 'start'
	}

	return {
		gridArea: `radio / ${props.position}`,
		justifySelf: align,
	}
};
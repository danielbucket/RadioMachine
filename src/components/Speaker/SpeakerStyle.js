import styled from 'styled-components';

export const SpeakerStyle = styled.div`
	display: none;
	border: .1em solid ${p=>p.theme.borderColor};

	@media(min-width:800px) {
		display: grid;
	}
`;
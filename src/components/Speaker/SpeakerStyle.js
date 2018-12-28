import styled from 'styled-components';

export const SpeakerStyle = styled.div`
	display: none;
	border: 1px solid ${p=>p.theme.borderColor};
	
	@media(min-width:${p=>p.theme.minWidthLgScreen}) {
		display: grid;
		height: 300px;
	}
`;
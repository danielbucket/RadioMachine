import styled from 'styled-components';

export const ColorModeSelectorStyle = styled.button`
	background: ${p=>p.theme.background};
	color: ${p=>p.theme.fontColor};
  border: .1em solid ${p=>p.theme.borderColor};
  border-radius: ${p=>p.theme.borderRadius};
  font-size: 1.5em;
  padding: 0;
`;
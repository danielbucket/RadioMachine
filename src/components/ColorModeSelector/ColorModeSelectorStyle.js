import styled from 'styled-components';

const ColorModeSelectorStyle = styled.button`
	grid-column: 1 / 1;

	background: ${p=>p.theme.background};
	color: ${p=>p.theme.fontColor};
  border: .1em solid ${p=>p.theme.borderColor};
  border-radius: ${p=>p.theme.borderRadius};
  font-size: 1.5em;
  padding: 0;
`;

export default ColorModeSelectorStyle;
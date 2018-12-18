import styled from 'styled-components';

const ColorModeButtonStyle = styled.button`
	grid-column: 1 / 1;

	background: ${p => p.theme.background};
	color: ${p => p.theme.fontColor};
  border: .1em solid ${p => p.theme.borderColor};
  border-radius: ${p => p.theme.borderRadius};
  width: 100%;
  height: 100%;
  font-size: 2em;  
`;

export default ColorModeButtonStyle;
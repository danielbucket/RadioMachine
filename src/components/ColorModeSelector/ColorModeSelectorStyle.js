import styled from 'styled-components';

export const ColorModeSelectorStyle = styled.button`
	grid-row: ColorModeSelector;
	grid-column: 1 / span 3;


	display: grid;
	grid-template-columns: repeat(${p=>p.themeQuantity}, 1fr);
	// grid-template-rows: repeat(2, 1fr);

  border: .1em solid ${p=>p.theme.borderColor};
  border-radius: ${p=>p.theme.borderRadius};
  font-size: 1.5em;
  padding: 0;
`;
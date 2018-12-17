import styled from 'styled-components';

export const ColorModeButtonStyle = styled.button`
	background: ${props => props.theme.colorMode ? props.theme.darkBG : props.theme.lightBG};
	color: ${props => props.theme.colorMode ? props.theme.darkFont : props.theme.lightFont};
  border: 2px solid ${props => props.theme.colorMode ? props.theme.darkBorder : props.theme.lightBorder};
  border-radius: 10px;
  width: 50%;

`;

ColorModeButtonStyle.defaultProps = {
  theme: {
    main: '#282c33',
  }
};
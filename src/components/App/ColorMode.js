import styled from 'styled-components';

const ColorMode = styled.div`
${i => console.log('fucked: ', i.colorMode)}
	background: ${props => props.theme.colorMode ? props.theme.darkBG : props.theme.lightBG};
	border: 2px solid ${props => props.theme.colorMode ? props.theme.darkBorder : props.theme.lightBorder};
	color: ${props => props.theme.colorMode ? props.theme.darkFont : props.theme.lightFont};
`;

ColorMode.defaultProps = {
  theme: {
    main: '#282c33',
  }
};

export default ColorMode;

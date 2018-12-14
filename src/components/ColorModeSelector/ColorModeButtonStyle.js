import styled from 'styled-components';

const ColorModeButtonStyle = styled.button`
	background: ${props => props.theme[props.value].background};
  color: ${props => props.theme[props.value].color};
  border: 2px solid ${props => props.theme[props.value].border};
  border-radius: 10px;
`;

ColorModeButtonStyle.defaultProps = {
  theme: {
    main: '#282c33',
  }
};

export default ColorModeButtonStyle;
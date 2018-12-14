import styled, { ThemeProvider } from 'styled-components';
import { pallette } from './pallette';

const ColorMode = styled.div`
			font-size: 2em;

      background: ${props => props.theme[props.colorModeStyle].background};
      color: ${props => props.theme[props.colorModeStyle].color};
      border: 2px solid ${props => props.theme[props.colorModeStyle].border};
      };
    `;

ColorMode.defaultProps = {
  theme: {
    main: '#282c33',
  }
};

export default ColorMode;
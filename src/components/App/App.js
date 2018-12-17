import React, { Component } from 'react';
import VolumeDisplay from '../VolumeDisplay';
import { ThemeProvider } from 'styled-components';
import { theme } from '../globalStyles/theme';
import { GlobalStyle } from '../globalStyles/GlobalStyle';
import ColorMode from './ColorMode';
import ColorModeSelector from '../ColorModeSelector';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colorMode: true,
    };

    this.setColorMode = this.setColorMode.bind(this);
  };

  setColorMode() {
    const colorModeValue = !this.state.colorMode;

    this.setState({ colorMode:colorModeValue });
  };

  render() {
    const { colorMode } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <ColorMode colorMode={colorMode}>
          <VolumeDisplay />
          <ColorModeSelector setColorMode={this.setColorMode}
                                colorMode={!colorMode}/>

        <GlobalStyle />
        </ColorMode>
      </ThemeProvider>
    );
  };
};

export default App;

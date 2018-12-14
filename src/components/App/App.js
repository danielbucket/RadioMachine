import React, { Component } from 'react';
import VolumeDisplay from '../VolumeDisplay';
import { ThemeProvider } from 'styled-components';
import { theme } from '../style/theme';
import ColorMode from './ColorMode';
import ColorModeSelector from '../ColorModeSelector';

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      colorModeStyle: 'lightMode',
    };

    this.setColorMode = this.setColorMode.bind(this);
  };

  setColorMode(i) {
    const selection = i.target.value;
    this.setState({
      colorModeStyle:selection
    });
  };


  render() {
    const { colorModeStyle } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <ColorMode colorModeStyle={colorModeStyle}>
          <VolumeDisplay />
          <ColorModeSelector setColorMode={this.setColorMode}/>
        </ColorMode>
      </ThemeProvider>
    );
  }
}

export default App;

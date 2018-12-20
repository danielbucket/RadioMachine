import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../globalStyles/theme';
import { GlobalStyle } from '../globalStyles/GlobalStyle';
import { Radio_MachineStyle } from './Radio_MachineStyle';
import ColorModeSelector from '../ColorModeSelector';
import RadioDeck  from '../RadioDeck';
import Speaker from '../Speaker';

class Radio_Machine extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colorMode: true,
    };

    this.setColorMode = this.setColorMode.bind(this);
    this.setColorScheme = this.setColorScheme.bind(this);
  };

  setColorMode() {
    const colorModeValue = !this.state.colorMode;

    this.setState({ colorMode:colorModeValue });
  };

  setColorScheme(theme) {
    if (this.state.colorMode) {
      return Object.assign({},theme.darkMode, theme.defaultStyles);
    };

    return Object.assign({},theme.lightMode, theme.defaultStyles);
  };

  render() {
    const { colorMode } = this.state;
    const colorScheme = this.setColorScheme(theme)

    return (
      <ThemeProvider theme={colorScheme}>
        <Radio_MachineStyle>
          <header>header</header>
            <Speaker position="speakerR"/>
            <RadioDeck />
            <Speaker position="speakerL"/>

          <div className="partition"></div>
          <footer className="footer">
            <ColorModeSelector setColorMode={this.setColorMode}
                                  colorMode={colorMode}/>
            <ColorModeSelector setColorMode={this.setColorMode}
                                  colorMode={colorMode}/>
            <ColorModeSelector setColorMode={this.setColorMode}
                                  colorMode={colorMode}/>
            <ColorModeSelector setColorMode={this.setColorMode}
                                  colorMode={colorMode}/>
          </footer>
        <GlobalStyle />
        </Radio_MachineStyle>
      </ThemeProvider>
    );
  };
};

export default Radio_Machine;

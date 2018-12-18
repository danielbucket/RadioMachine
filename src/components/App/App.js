import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../globalStyles/theme';
import { GlobalStyle } from '../globalStyles/GlobalStyle';
import { AppStyle } from './AppStyle';
import ColorModeSelector from '../ColorModeSelector';
import RadioMachine from '../RadioMachine';

class App extends Component {
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
        <AppStyle>
        <header>
        </header>
          <RadioMachine />
          <footer className="footer">
            <ColorModeSelector setColorMode={this.setColorMode}
                                  colorMode={colorMode}/>
          </footer>
        <GlobalStyle />
        </AppStyle>
      </ThemeProvider>
    );
  };
};

export default App;

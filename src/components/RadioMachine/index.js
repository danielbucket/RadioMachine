import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../globalStyles/theme';
import { GlobalStyle } from '../globalStyles/GlobalStyle';
import { RadioMachineStyle } from './RadioMachineStyle';
import ColorModeSelector from '../ColorModeSelector';
import RadioDeck  from '../RadioDeck';
import Speaker from '../Speaker';
import Collection from '../Collection';

class RadioMachine extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colorMode: true,
      bassLevel: 10,
      tweeterLevel: 10,
      volumeLevel: 10,
    };

    this.setColorMode = this.setColorMode.bind(this);
    this.setColorScheme = this.setColorScheme.bind(this);
    this.mouseEvent = this.mouseEvent.bind(this);
  };



  setColorMode() {
    console.log("mother fucker")

    const colorModeValue = !this.state.colorMode;

    setInterval(() => {
      this.setState({ colorMode:colorModeValue })
      
    }, 250)


    this.setState({ colorMode:colorModeValue });
  };

  setColorScheme(theme) {
    if (this.state.colorMode) {
      return Object.assign(
        {},
        theme.darkMode,
        theme.defaultStyles,
        theme.mediaSizes,
      );
    };

    return Object.assign(
      {},
      theme.lightMode,
      theme.defaultStyles,
      theme.mediaSizes,
    );
  };

  mouseEvent(i) {
    console.log('i: ', i);
  };

  render() {
    const { colorMode } = this.state;
    const colorScheme = this.setColorScheme(theme);
    const { bassLevel, tweeterLevel, volumeLevel } = this.state;
    const speakerLevels = {
      bassLevel, tweeterLevel, volumeLevel
    };

    return (
      <ThemeProvider theme={colorScheme}>
        <RadioMachineStyle>
          <header>header</header>
          <Speaker position="speakerL" levels={speakerLevels} mouseEvent={this.mouseEvent}/>
          <RadioDeck />
          <Speaker position="speakerR" levels={speakerLevels} mouseEvent={this.mouseEvent}/>

          <Collection />
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
        </RadioMachineStyle>
      </ThemeProvider>
    );
  };
};

export default RadioMachine;

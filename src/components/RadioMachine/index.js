import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { globalTheme } from '../globalStyles/theme';
import { GlobalStyle } from  '../globalStyles/GlobalStyle';
import { setColorMode } from '../globalStyles/setColorMode';
import { RadioMachineStyle } from './RadioMachineStyle';
import RadioDeck  from '../RadioDeck';
import Speaker from '../Speaker';
import Collection from '../Collection';
import ColorModeSelector from '../ColorModeSelector';

class RadioMachine extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colorModeName: '',
      colorModeObj: {},
      bassLevel: 10,
      tweeterLevel: 10,
      volumeLevel: 10,
    };

    this.setColorMode = setColorMode.bind(this);
    this.setColorScheme = this.setColorScheme.bind(this);
    this.globalTheme = globalTheme;
  };


  componentWillMount() {
    const oldState = this.state;
    const initState = this.setColorScheme('darkMode');
    const newState = Object.assign(oldState,initState);

    this.setState({ newState });
  };


  setColorScheme(themeName) {
    const newThemeObj = this.setColorMode(themeName,this.globalTheme);
    this.setState({ 
      colorModeName:themeName,
      colorModeObj:newThemeObj,
    });
  };


  render() {
    const colorScheme = this.state.colorModeObj;
    const { bassLevel, tweeterLevel, volumeLevel } = this.state;
    const speakerLevels = {
      bassLevel, tweeterLevel, volumeLevel,
    };

    return (
      <ThemeProvider theme={colorScheme}>
        <RadioMachineStyle>
          <header>header</header>
          <Speaker position="speakerL" levels={speakerLevels}/>
          <RadioDeck />
          <Speaker position="speakerR" levels={speakerLevels}/>
          <Collection />
          <ColorModeSelector setColorScheme={this.setColorScheme }
                               globalTheme={globalTheme}/>
        <GlobalStyle />
        </RadioMachineStyle>
      </ThemeProvider>
    );
  };
};

export default RadioMachine;

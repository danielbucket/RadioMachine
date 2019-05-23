  export const setColorMode = (themeName,globalTheme) => {
    const newTheme = globalTheme.themes[themeName];
    const { borderRadius, mainFont } = globalTheme.defaultStyles;
    const { mediaSizes } = globalTheme;
    const themeQuantity = Object.keys(globalTheme.themes).length;

    return Object.assign(
        {},
        newTheme,
        mediaSizes,
        { borderRadius:borderRadius },
        { mainFont:mainFont },
        { themeQuantity:themeQuantity },
    );
  };
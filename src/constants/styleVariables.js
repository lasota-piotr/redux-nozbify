const globalLineHeight = 24;

const styleVariables = {

  globalFontSize: '16px',
  globalLineHeight: `${globalLineHeight}px`,

  // units
  unit: `${globalLineHeight}px`,
  unitTiny: `${globalLineHeight * 0.25}px`,
  unitSmall: `${globalLineHeight * 0.5}px`,
  unitLarge: `${globalLineHeight * 2}px`,
  unitHuge: `${globalLineHeight * 4}px`,
  globalRadius: '3px',
  globalTransition: 'all 300ms ease-in-out',


  // colors
  colorPrimary: '#47b8e0',
  colorPrimaryDark: '#2b617e',
  colorSecondary: '#ffc952',
  colorSecondaryDark: '#ac853b',
  colorTertiary: '#ff7473',
  colorTertiaryDark: '#793a39',

  colorGrayVeryDark: '#1a111e',
  colorGrayDark: '#343137',
  colorGray: '#7b8294',
  colorGrayLight: '#bcc5d9',
  colorGrayVeryLight: '#d7e0f4',
};

const styleVariablesElements = {
  // colors
  colorText: styleVariables.colorGrayDark,
};

export default {
  ...styleVariables,
  ...styleVariablesElements,
};

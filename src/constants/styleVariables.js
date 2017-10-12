const unitFactorTiny = 0.25;
const unitFactorSmall = 0.5;
const unitFactorLarge = 2;
const unitFactorHuge = 4;

const globalLineHeight = 24;

const styleVariables = {
  globalFontSize: '16px',
  globalLineHeight: `${globalLineHeight}px`,

  unit: `${globalLineHeight}px`,
  unitTiny: `${globalLineHeight * unitFactorTiny}px`,
  unitSmall: `${globalLineHeight * unitFactorSmall}px`,
  unitLarge: `${globalLineHeight * unitFactorLarge}px`,
  unitHuge: `${globalLineHeight * unitFactorHuge}px`,
  globalRadius: '3px',
  globalTransition: 'all 300ms ease-in-out',
};

export default styleVariables;

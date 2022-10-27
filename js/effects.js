const EFFECTS = [
  {
    idName: 'effect-none',
    className: 'effects__preview--none'
  },

  {
    idName: 'effect-chrome',
    className: 'effects__preview--chrome',
    filter: 'grayscale',
    step: 0.1,
    unit: '',
    minValue: 0,
    maxValue: 1
  },

  {
    idName: 'effect-sepia',
    className: 'effects__preview--sepia',
    filter: 'sepia',
    step: 0.1,
    unit: '',
    minValue: 0,
    maxValue: 1
  },

  {
    idName: 'effect-marvin',
    className: 'effects__preview--marvin',
    filter: 'invert',
    step: 1,
    unit: '%',
    minValue: 0,
    maxValue: 100
  },

  {
    idName: 'effect-phobos',
    className: 'effects__preview--phobos',
    filter: 'blur',
    step: 0.1,
    unit: 'px',
    minValue: 0,
    maxValue: 3
  },

  {
    idName: 'effect-heat',
    className: 'effects__preview--heat',
    filter: 'brightness',
    step: 0.1,
    unit: '',
    minValue: 1,
    maxValue: 3
  }
];

export { EFFECTS };

const EFFECTS = {
  chrome: { min: 0, max: 1, step: 0.1, filter: 'grayscale', units: '' },
  sepia: { min: 0, max: 1, step: 0.1, filter: 'sepia', units: '' },
  marvin: { min: 0, max: 100, step: 1, filter: 'invert', units: '%' },
  phobos: { min: 0, max: 3, step: 0.1, filter: 'blur', units: 'px' },
  heat: { min: 1, max: 3, step: 0.1, filter: 'brightness', units: '' }
};

export { EFFECTS };

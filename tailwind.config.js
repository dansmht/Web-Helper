function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

const colors = {
  error: withOpacityValue('--error-color'),
  warning: withOpacityValue('--warning-color'),
  info: withOpacityValue('--info-color'),
};

const backgroundColor = {
  primary: withOpacityValue('--primary-bg-color'),
  secondary: withOpacityValue('--secondary-bg-color'),
  'btn-primary': withOpacityValue('--btn-primary-bg-color'),
  'btn-primary-hover': withOpacityValue('--btn-primary-hover-bg-color'),
  'btn-secondary': withOpacityValue('--btn-secondary-bg-color'),
  'btn-secondary-hover': withOpacityValue('--btn-secondary-hover-bg-color'),
  input: withOpacityValue('--input-bg-color'),
};

const textColor = {
  primary: withOpacityValue('--primary-text-color'),
  secondary: withOpacityValue('--secondary-text-color'),
  'secondary-title': withOpacityValue('--secondary-text-title-color'),
  'btn-primary': withOpacityValue('--btn-primary-text-color'),
  'btn-secondary': withOpacityValue('--btn-secondary-text-color'),
  link: withOpacityValue('--link-text-color'),
  'link-active': withOpacityValue('--link-text-active-color'),
  input: withOpacityValue('--input-text-color'),
  'input-placeholder': withOpacityValue('--input-placeholder-color'),
};

const borderColor = {
  color: withOpacityValue('--border-color'),
  'active-color': withOpacityValue('--border-active-color'),
};

module.exports = {
  content: [
    './src/**/*.jsx',
  ],
  theme: {
    extend: {
      colors,
      backgroundColor,
      textColor,
      borderColor,
      ringColor: borderColor,
      boxShadowColor: borderColor,
    },
  },
  plugins: [],
};

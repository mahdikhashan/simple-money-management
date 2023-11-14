import { create } from '@storybook/theming/create';

import brandImage from '../src/assets/image/logo-x-small.png'

export default create({
  base: 'light',
  brandTitle: 'Simple Money Management',
  brandUrl: 'https://example.com',
  brandImage,
  brandTarget: '_self',

  colorPrimary: '#00875F',
  colorSecondary: '#7C7C8A',

  // UI
  appBg: '#ffffff',
  appContentBg: '#00875F',
  appBorderColor: '#585C6D',
  appBorderRadius: 4,

  // Text colors
  textColor: '#10162F',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#9E9E9E',
  barSelectedColor: '#585C6D',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#10162F',
  inputTextColor: '#10162F',
  inputBorderRadius: 2,

});

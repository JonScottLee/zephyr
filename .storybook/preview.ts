import type { Preview } from '@storybook/react';

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const MY_VIEWPORTS = {
  screen_lg: {
    name: '1200px',
    styles: {
      width: '1200px',
      height: '500px',
    },
  },
  screen_xl: {
    name: '1568px',
    styles: {
      width: '1568px',
      height: '500px',
    },
  },
  screen_xxl: {
    name: '2000px',
    styles: {
      width: '2000px',
      height: '500px',
    },
  },
};
const preview: Preview = {
  parameters: {
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...MY_VIEWPORTS,
      },
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

import '../src/tailwind.css';

export default preview;

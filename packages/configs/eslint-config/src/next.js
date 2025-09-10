// @ts-check
import prettier from 'eslint-config-prettier/flat';
import javascript from './base/javascript.js';
import typescript from './base/typescript.js';
import react from './base/react.js';
import next from './base/next.js';
import tailwind from './base/tailwind.js';
import turbo from './base/turbo.js';

export default [
  javascript,
  typescript,
  react,
  next,
  tailwind,
  turbo,
  {
    files: ['**/*.{jsx,mjsx,tsx,mtsx}'],
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        {
          allowExportNames: [
            'metadata',
            'generateMetadata',
            'viewport',
            'generateViewport',
          ],
        },
      ],
    },
  },
  {
    files: [
      '**/page.{jsx,mjsx,tsx,mtsx}',
      '**/default.{jsx,mjsx,tsx,mtsx}',
      '**/layout.{jsx,mjsx,tsx,mtsx}',
      '**/error.{jsx,mjsx,tsx,mtsx}',
      '**/global-error.{jsx,mjsx,tsx,mtsx}',
      '**/not-found.{jsx,mjsx,tsx,mtsx}',
      '**/loading.{jsx,mjsx,tsx,mtsx}',
    ],
    rules: {
      'import-x/no-default-export': 'off',
    },
  },
  prettier,
];

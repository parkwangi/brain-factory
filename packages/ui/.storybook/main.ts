import { join, dirname } from 'node:path';
import { StorybookConfig } from 'storybook-react-rsbuild';

function getAbsolutePath(value: string) {
  return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-docs'),
  ],
  framework: 'storybook-react-rsbuild',
  rsbuildFinal: (config) => {
    // Customize the final Rsbuild config here
    return config;
  },
};

export default config;

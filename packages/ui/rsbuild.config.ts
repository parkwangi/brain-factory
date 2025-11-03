import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSvgr } from '@rsbuild/plugin-svgr';
import { pluginCssMinimizer } from '@rsbuild/plugin-css-minimizer';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginSvgr({
      svgrOptions: {
        exportType: 'default',
      },
    }),
    pluginCssMinimizer(),
  ],
  tools: {
    lightningcssLoader: false,
  },
});

// @ts-check

import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier/flat';
import javascript from './base/javascript.js';
import typescript from './base/typescript.js';
import turbo from './base/turbo.js';

export default tseslint.config(javascript, typescript, turbo, prettier);

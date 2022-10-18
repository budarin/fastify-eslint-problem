/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable security/detect-non-literal-require */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');

const babelConfig = require(path.resolve('config/babel/client.babel.config'));

module.exports = require('babel-jest').default.createTransformer(babelConfig);

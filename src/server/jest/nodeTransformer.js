/* eslint-disable @typescript-eslint/no-var-requires */

const babelConfig = require('../../../config/babel/server.babel.config');

module.exports = require('babel-jest').default.createTransformer(babelConfig);

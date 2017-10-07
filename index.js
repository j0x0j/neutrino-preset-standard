const lint = require('neutrino-middleware-eslint');
const merge = require('deepmerge');

module.exports = (neutrino, options = {}) => {
  neutrino.use(lint, merge({
    eslint: {
      baseConfig: {
        extends: ['standard', 'standard-jsx']
      }
    }
  }, options));
};

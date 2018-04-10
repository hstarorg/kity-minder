const commonConfig = require('./common.config');
const localConfig = require('./local.config');

module.exports = Object.assign({}, commonConfig, localConfig);

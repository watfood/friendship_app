var _ = require('lodash');

var localEnvVars = {
  TITLE:      'friendship_app',
  SAFE_TITLE: 'friendship_app'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);

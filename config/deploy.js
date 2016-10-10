/* jshint node: true */

let config = require('../config');
let staging = config.staging;
let production = config.production;

module.exports = function(deployTarget) {
  var ENV = {
    couchdb: {
      db: `${staging.db.url}/${staging.db.name}`
    },
    rewrites: {
      top: [
        { from: 'api', to: '../..' },
        { from: 'api/*', to: '../../*' }
      ]
    },
    build: {
      environment: 'production'
    }
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
  }

  if (deployTarget === 'staging') {
  }

  if (deployTarget === 'production') {
    ENV.couchdb.db = `${production.db.url}/${production.db.name}`;
  }

  return ENV;
};

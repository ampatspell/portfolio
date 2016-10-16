/* jshint node: true */

let config = require('../config');
let deploy = config.deploy;

module.exports = function(deployTarget) {
  var ENV = {
    couchdb: {
      db: `${deploy.url}/${deploy.name}`
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
    ENV.couchdb.db = `${production.db.url}/${production.db.name}-staging`;
  }

  if (deployTarget === 'production') {
  }

  return ENV;
};

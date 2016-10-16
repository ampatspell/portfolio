/* jshint node: true */

let config = require('../config');
let deploy = config.deploy;

let db = `${deploy.url}/${deploy.name}`;

module.exports = function(deployTarget) {
  var ENV = {
    couchdb: {
      db: db
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
    ENV.couchdb.db = `${db}-staging`;
  }

  if (deployTarget === 'production') {
  }

  return ENV;
};

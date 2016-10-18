/* jshint node: true */

let site = require('./site');
let couchdb = require('./couchdb');
let db = `${couchdb.url}/${site.database}`;

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

/* jshint node: true */

let site = require('../sites/_current');
let db = `${site.url}/${site.database}`;

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

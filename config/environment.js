/* jshint node: true */

let site = require('../sites/_current');
let pkg = require('../package');
let url = process.env.COUCH_URL;

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'portfolio',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
      },
      EXTEND_PROTOTYPES: {
        Date: false
      }
    },
    APP: {
      name: pkg.name,
      version: pkg.version
    },
    portfolio: {
      title: site.title,
      database: {
        url:  url || '/api',
        name: 'portfolio-dev'
      },
      admins: [ '_admin', site.admin ],
      changes: {
        feed: 'long-polling'
      }
    },
    fastboot: {
      hostWhitelist: [/^localhost:\d+$/]
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.portfolio.database.url = '/';
    ENV.portfolio.database.name = 'api';
    ENV.portfolio.changes.feed = [ 'event-source', 'long-polling' ];
    ENV.rootURL = '/';
  }

  return ENV;
};

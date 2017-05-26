/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var site = require('./sites/_current');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    'ember-cli-babel': {
      includePolyfill: true
    },
    lessOptions: {
      paths: [
        `app/styles/themes/${site.theme}`
      ]
    }
  });

  app.import('bower_components/speakingurl/lib/speakingurl.js');

  return app.toTree();
};

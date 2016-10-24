/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var Funnel = require('broccoli-funnel');
var site = require('./sites/_current');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    babel: {
      includePolyfill: true
    },
    lessOptions: {
      paths: [
        `app/styles/${site.theme}`
      ]
    }
  });

  app.import('bower_components/speakingurl/lib/speakingurl.js');

  var changes = new Funnel('CHANGES.md', { destDir: '/assets/CHANGES.md' });

  return app.toTree(changes);
};

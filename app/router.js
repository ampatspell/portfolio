import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {

  this.route('session', function() {
    this.route('new');
    this.route('delete');
  });

  this.route('sections', function() {
    this.route('section', { path: '/*path' }, function() {
    });
  });

  this.route('backend', function() {
    this.route('sections', function() {
      this.route('new');
      this.route('section', { path: '/:section_id' }, function() {
        this.route('new');
        this.route('edit');
      });
    });
    this.route('settings', function() {
    });
  });

});

export default Router;

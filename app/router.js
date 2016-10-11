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
  this.route('backend', function() {
  });
  this.route('sketches', function() {
    this.route('backend');
  });
});

export default Router;

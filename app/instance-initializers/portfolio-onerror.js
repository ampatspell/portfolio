import Ember from 'ember';

export default {
  name: 'portfolio:onerror',
  after: 'portfolio:injections',
  initialize(app) {
    Ember.onerror = function(err) {
      err = err || new Ember.Error('onerror');
      let service = app.lookup('service:error-reporter');
      service.report(err);
    };
  }
};

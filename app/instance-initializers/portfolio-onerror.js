import Ember from 'ember';

export default {
  name: 'portfolio:onerror',
  initialize(app) {
    Ember.onerror = function(err, opts) {
      err = err || new Ember.Error('onerror');
      let service = app.lookup('service:error-reporter');
      service.report(err);
    };
  }
};

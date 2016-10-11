import Ember from 'ember';

const {
  Logger: { error }
} = Ember;

export default Ember.Service.extend({

  report(err) {
    error(err.toJSON ? err.toJSON() : err.stack);
  }

});

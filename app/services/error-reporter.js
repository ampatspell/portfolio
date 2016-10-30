import Ember from 'ember';

const {
  Logger: { error }
} = Ember;

export default Ember.Service.extend({

  report(err) {
    if(err.toJSON) {
      error(err.toJSON(), err.stack);
    } else {
      error(err.message, err.stack);
    }
  }

});

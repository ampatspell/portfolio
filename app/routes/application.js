import Ember from 'ember';

const {
  inject: { service },
  RSVP: { resolve }
} = Ember;

export default Ember.Route.extend({

  errorReporter: service(),

  model() {
    return this.get('store.session').restore().then(() => undefined, err => {
      this.get('errorReporter').report(err);
      return resolve();
    });
  }

});

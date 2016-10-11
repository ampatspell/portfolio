import Ember from 'ember';

const {
  inject: { service },
  RSVP: { resolve }
} = Ember;

export default Ember.Route.extend({

  model() {
    return this.get('store.session').restore().then(() => undefined, err => {
      this.get('error-reporter').report(err);
      return resolve();
    });
  }

});

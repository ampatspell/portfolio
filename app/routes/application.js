import Ember from 'ember';

const {
  inject: { service },
  RSVP: { all, resolve }
} = Ember;

export default Ember.Route.extend({

  errorReporter: service(),

  model() {
    return all([
      this.get('store.session').restore().then(() => undefined, err => {
        this.get('errorReporter').report(err);
        return resolve();
      }),
      this.get('store.db.main.visibleSections.promise')
    ]);
  }

});

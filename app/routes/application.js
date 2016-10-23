import Ember from 'ember';

const {
  inject: { service },
  RSVP: { all, resolve, reject }
} = Ember;

export default Ember.Route.extend({

  errorReporter: service(),

  model(params, transition) {
    return all([
      this.get('store.session').restore().then(() => undefined, err => {
        this.get('errorReporter').report(err);
        return resolve();
      }),
      this.get('store.db.main.sections.promise')
    ]).then(() => undefined, err => {
      if(transition.targetName === 'setup') {
        return resolve();
      }
      return reject(err);
    });
  }

});

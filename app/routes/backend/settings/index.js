import Ember from 'ember';
import environment from '../../../config/environment';

const {
  RSVP: { hash },
  inject: { service }
} = Ember;

const app = environment.APP;

export default Ember.Route.extend({

  sideload: service(),

  model() {
    return hash({
      name:    app.name,
      version: app.version,
      changes: this.get('sideload').asset('CHANGES.md'),
    });
  }
});

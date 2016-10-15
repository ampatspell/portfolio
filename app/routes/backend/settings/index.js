import Ember from 'ember';
import environment from '../../../config/environment';

const {
  RSVP: { hash },
  inject: { service }
} = Ember;

const {
  name,
  version
} = environment.APP;

export default Ember.Route.extend({

  sideload: service(),

  model() {
    return hash({
      name,
      version,
      changes: this.get('sideload').asset('CHANGES.md'),
    });
  }
});

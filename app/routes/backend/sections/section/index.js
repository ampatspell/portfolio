import Ember from 'ember';

const {
  RSVP: { resolve }
} = Ember;

export default Ember.Route.extend({

  model() {
    return this.modelFor('backend.sections.section');
  }

});

import Ember from 'ember';

const {
  RSVP: { resolve }
} = Ember;

export default Ember.Route.extend({

  actions: {
    done() {
      let model = this.currentModel;
      this.transitionTo('backend.sections.section', model);
    }
  }

});

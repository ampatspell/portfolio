import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    showSection(/*model*/) {
      // TODO: show actual model
      this.transitionTo('backend.sections');
    }
  }

});

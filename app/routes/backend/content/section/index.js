import Ember from 'ember';

const {
  RSVP: { resolve }
} = Ember;

export default Ember.Route.extend({

  actions: {
    delete(model) {
      model.delete().then(() => {
        this.transitionTo('backend.content');
      });
    }
  }

});

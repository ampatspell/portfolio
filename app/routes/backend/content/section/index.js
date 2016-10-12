import Ember from 'ember';

const {
  RSVP: { resolve }
} = Ember;

export default Ember.Route.extend({

  actions: {
    delete() {
      let model = this.currentModel;
      model.delete().then(() => {
        this.transitionTo('backend.content');
      });
    },
    edit() {
      let model = this.currentModel;
      this.transitionTo('backend.content.section.edit', model);
    }
  }

});

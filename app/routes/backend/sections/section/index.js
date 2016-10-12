import Ember from 'ember';

const {
  RSVP: { resolve }
} = Ember;

export default Ember.Route.extend({

  model() {
    return this.modelFor('backend.sections.section');
  },

  actions: {
    delete() {
      let model = this.currentModel;
      model.delete().then(() => {
        this.transitionTo('backend.sections');
      });
    },
    edit() {
      let model = this.currentModel;
      this.transitionTo('backend.sections.section.edit', model);
    },
    new() {
      let model = this.currentModel;
      this.transitionTo('backend.sections.section.new', model);
    }
  }

});

import Ember from 'ember';

const {
  RSVP: { resolve }
} = Ember;

export default Ember.Route.extend({

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
    }
  }

});

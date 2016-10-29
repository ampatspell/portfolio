import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    cancel() {
      if(this.attrs.cancel) {
        this.attrs.cancel();
      }
    },
    save() {
      return this.save();
    }
  },

  save() {
    return this.get('section').save().then(section => {
      this.transitionTo('backend.sections.section', section);
    });
  }

});

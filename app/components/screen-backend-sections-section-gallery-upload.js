import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: [ ':screen-backend-sections-section-gallery-upload' ],

  actions: {
    files(files) {
      console.log(files);
    },
    cancel() {
      this.transitionTo('backend.sections.section', this.get('section'));
    }
  }
});

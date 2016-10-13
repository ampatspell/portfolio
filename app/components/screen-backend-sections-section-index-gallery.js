import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: [ ':screen-backend-sections-section-index-text' ],

  actions: {
    upload() {
      this.transitionTo('backend.sections.section.gallery.upload', this.get('section'));
    }
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: [ ':screen-backend-sections-section-index' ],

  actions: {
    delete() {
      this.attrs.delete();
    },
    edit() {
      this.attrs.edit();
    }
  }
});

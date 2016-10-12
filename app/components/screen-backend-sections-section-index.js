import Ember from 'ember';

const {
  computed
} = Ember;

export default Ember.Component.extend({
  classNameBindings: [ ':screen-backend-sections-section-index' ],

  componentName: computed('section.modelName', function() {
    let section = this.get('section');
    if(!section) {
      return;
    }
    return `screen-backend-sections-section-index-${section.get('modelName')}`;
  }).readOnly(),

  actions: {
    delete() {
      this.attrs.delete();
    },
    edit() {
      this.attrs.edit();
    },
    new() {
      this.attrs.new();
    }
  }
});

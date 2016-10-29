import Ember from 'ember';

const {
  computed
} = Ember;

export default Ember.Component.extend({
  classNameBindings: [ ':ui-frontend-section', 'section.isIndex:index' ],

  section: null,

  componentName: computed('section.modelName', function() {
    let section = this.get('section');
    if(!section) {
      return;
    }
    let name = section.get('modelName');
    return `ui-frontend/sections/section/content/${name}`;
  }).readOnly()

});

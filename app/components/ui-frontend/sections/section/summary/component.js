import Ember from 'ember';
import ScrollTop from 'portfolio/mixins/scroll-top';

const {
  computed,
  inject: { service }
} = Ember;

export default Ember.Component.extend(ScrollTop, {
  classNameBindings: [ ':ui-frontend-section', ':summary' ],

  backend: service(),

  componentName: computed('section.{hasSummary,modelName}', function() {
    let { hasSummary, modelName } = this.get('section').getProperties('hasSummary', 'modelName');
    if(!hasSummary) {
      return;
    }
    return `ui-frontend/sections/section/summary/content/${modelName}`;
  }).readOnly()

});

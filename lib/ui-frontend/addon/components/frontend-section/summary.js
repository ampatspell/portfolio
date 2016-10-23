import Ember from 'ember';
import layout from '../../templates/components/frontend-section/summary';

const {
  computed,
  inject: { service }
} = Ember;

export default Ember.Component.extend({
  classNameBindings: [ ':frontend-section', ':summary' ],
  layout,

  backend: service(),

  componentName: computed('section.{hasSummary,modelName}', function() {
    let { hasSummary, modelName } = this.get('section').getProperties('hasSummary', 'modelName');
    if(!hasSummary) {
      return;
    }
    return `frontend-section/summary/${modelName}`;
  }).readOnly(),

});

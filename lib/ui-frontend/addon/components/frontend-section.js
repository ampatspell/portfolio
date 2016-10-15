import Ember from 'ember';
import layout from '../templates/components/frontend-section';

const {
  computed
} = Ember;

export default Ember.Component.extend({
  classNameBindings: [ ':frontend-section' ],
  layout,

  section: null,

  componentName: computed('section.modelName', function() {
    let section = this.get('section');
    if(!section) {
      return;
    }
    let name = section.get('modelName');
    return `frontend-section-${name}`;
  }).readOnly(),

});

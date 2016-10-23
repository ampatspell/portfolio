import Ember from 'ember';
import layout from '../templates/components/frontend-menu-item';

const {
  computed
} = Ember;

export default Ember.Component.extend({
  classNameBindings: [':frontend-menu-item'],
  layout,

  subsections: computed('section.isOpen', 'section.sortedVisibleSections', function() {
    if(!this.get('section.isOpen')) {
      return;
    }
    return this.get('section.sortedVisibleSections');
  }).readOnly()

});

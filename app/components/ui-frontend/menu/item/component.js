import Ember from 'ember';

const {
  computed
} = Ember;

export default Ember.Component.extend({
  classNameBindings: [':ui-frontend-menu-item'],

  subsections: computed('section.isOpen', 'section.sortedVisibleSections', function() {
    if(!this.get('section.isOpen')) {
      return;
    }
    return this.get('section.sortedVisibleSections');
  }).readOnly()

});

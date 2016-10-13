import Ember from 'ember';
import layout from '../templates/components/frontend-menu-item';

const {
  computed
} = Ember;

export default Ember.Component.extend({
  classNameBindings: [':frontend-menu-item'],
  layout,

  visible: computed('section.sections.@each.visible', function() {
    let sections = this.get('section.sections');
    if(!sections) {
      return;
    }
    return sections.filterBy('visible', true);
  }).readOnly()

});

import Ember from 'ember';
import layout from '../templates/components/frontend-menu';

const {
  computed
} = Ember;

export default Ember.Component.extend({
  classNameBindings: [':frontend-menu'],
  layout,

  sections: null,

  roots: computed('sections.@each.{category,visible}', function() {
    return this.get('sections').filter(section => {
      let { category, visible } = section.getProperties('category', 'visible');
      return !category && visible;
    });
  }).readOnly(),

});

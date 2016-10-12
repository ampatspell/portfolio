import Ember from 'ember';
import layout from '../templates/components/frontend-menu';

const {
  computed
} = Ember;

export default Ember.Component.extend({
  classNameBindings: [':frontend-menu'],
  layout,

  sections: null,

  roots: computed('sections.@each.category', function() {
    return this.get('sections').filterBy('category', null);
  }).readOnly(),

});

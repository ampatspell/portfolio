import Ember from 'ember';

const {
  computed
} = Ember;

export default Ember.Component.extend({
  classNameBindings: [ ':ui-backend-tree' ],

  roots: computed('sections.@each.category', function() {
    return this.get('sections').filterBy('category', null).sortBy('position');
  }).readOnly(),

});

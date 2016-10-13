import Ember from 'ember';

const {
  computed
} = Ember;

export default Ember.Component.extend({
  classNameBindings: [ ':screen-bakend-sections' ],

  roots: computed('sections.@each.category', function() {
    return this.get('sections').filterBy('category', null);
  }).readOnly(),

  actions: {
    select(model) {
      this.attrs.select(model);
    }
  }

});
import Ember from 'ember';

const {
  computed
} = Ember;

export default Ember.Component.extend({
  classNameBindings: [ ':screen-bakend-sections' ],

  roots: computed('sections.@each.{category,position}', {
    get() {
      return this.get('sections').filterBy('category', null).sort('position');
    },
    set(key, value) {
      value.forEach((model, idx) => {
        model.set('position', idx);
      });
      return value;
    }
  }),

  actions: {
    sort(array) {
      array.map(model => model.save());
    }
  }

});

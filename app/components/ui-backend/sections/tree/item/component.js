import Ember from 'ember';
import Reorderable from 'portfolio/mixins/reorderable';

export default Ember.Component.extend(Reorderable, {
  classNameBindings: [ ':ui-backend-tree-item' ],

  reorderModels() {
    this.attrs.reorder(...arguments);
  },

  actions: {
    click() {
      if(this.attrs.select) {
        this.attrs.select(this.get('model'));
      }
    },
    new() {
      if(this.attrs.select) {
        this.attrs.new(this.get('model'));
      }
    }
  }

});

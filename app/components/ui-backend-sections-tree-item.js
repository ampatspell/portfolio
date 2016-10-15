import Ember from 'ember';
import { Reorderable } from 'ui-draggable';

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
    }
  }

});

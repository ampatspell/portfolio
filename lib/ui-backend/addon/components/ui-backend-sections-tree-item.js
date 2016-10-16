import Ember from 'ember';
import layout from '../templates/components/ui-backend-sections-tree-item';
import { Reorderable } from 'ui-draggable';

export default Ember.Component.extend(Reorderable, {
  classNameBindings: [ ':ui-backend-tree-item' ],
  layout,

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

import Ember from 'ember';
import { Reorderable } from 'ui-draggable';

const {
  computed
} = Ember;

export default Ember.Component.extend(Reorderable, {
  classNameBindings: [ ':ui-backend-tree-item' ],

  nested: computed('model.sections.@each.position', function() {
    let sections = this.get('model.sections');
    if(!sections) {
      return;
    }
    return sections.sortBy('position');
  }).readOnly(),

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

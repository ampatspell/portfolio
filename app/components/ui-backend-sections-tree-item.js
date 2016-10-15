import Ember from 'ember';
import { Draggable } from 'ui-draggable';

const {
  computed
} = Ember;

export default Ember.Component.extend(Draggable, {
  classNameBindings: [ ':ui-backend-tree-item' ],

  nested: computed('model.sections', function() {
    let sections = this.get('model.sections');
    if(!sections) {
      return;
    }
    return sections.sortBy('position');
  }).readOnly(),

  onDrop() {
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

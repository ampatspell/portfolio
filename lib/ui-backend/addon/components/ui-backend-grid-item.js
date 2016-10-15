import Ember from 'ember';
import layout from '../templates/components/ui-backend-grid-item';
import { Reorderable } from 'ui-draggable';

export default Ember.Component.extend(Reorderable, {
  classNameBindings: [ ':ui-backend-grid-item' ],
  layout,

  isHorizontalReorder: true,

  reorderModels() {
    this.attrs.reorder(...arguments);
  }

});

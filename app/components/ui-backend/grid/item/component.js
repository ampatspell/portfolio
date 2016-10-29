import Ember from 'ember';
import Reorderable from 'portfolio/mixins/reorderable';

export default Ember.Component.extend(Reorderable, {
  classNameBindings: [ ':ui-backend-grid-item' ],

  isHorizontalReorder: true,

  reorderModels() {
    this.attrs.reorder(...arguments);
  }

});

import Ember from 'ember';
import layout from '../../templates/components/ui-backend-tree/item';

export default Ember.Component.extend({
  classNameBindings: [ ':ui-backend-tree-item', 'attrs.action:action' ],
  layout,

  click() {
    if(this.attrs.action) {
      this.attrs.action();
    }
  }

});

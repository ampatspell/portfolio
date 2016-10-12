import Ember from 'ember';
import layout from '../../templates/components/ui-backend-tree/item';

export default Ember.Component.extend({
  classNameBindings: [ ':ui-backend-tree-item', 'attrs.action:action' ],
  layout,

  actions: {
    select() {
      if(this.attrs.action) {
        this.attrs.action(this.get('model'));
      }
    }
  }

});

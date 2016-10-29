import Ember from 'ember';
import layout from '../templates/components/ui-backend-row';

export default Ember.Component.extend({
  classNameBindings: [ ':ui-backend-row', 'attrs.action:action' ],
  layout,

  click() {
    if(this.attrs.action) {
      this.attrs.action();
    }
  }

});

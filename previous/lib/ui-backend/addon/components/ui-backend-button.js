import Ember from 'ember';
import layout from '../templates/components/ui-backend-button';

export default Ember.Component.extend({
  classNameBindings: [ ':ui-backend-button' ],
  layout,

  actions: {
    action() {
      if(this.attrs.action) {
        this.attrs.action();
      }
    }
  }
});

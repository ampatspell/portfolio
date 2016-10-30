import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: [ ':ui-backend-row', 'attrs.action:action' ],

  click() {
    if(this.attrs.action) {
      this.attrs.action();
    }
  }

});

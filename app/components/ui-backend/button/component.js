import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: [ ':ui-backend-button' ],

  actions: {
    action() {
      if(this.attrs.action) {
        this.attrs.action();
      }
    }
  }

});

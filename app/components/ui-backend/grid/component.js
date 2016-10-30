import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: [ ':ui-backend-grid' ],

  actions: {
    sort() {
      if(this.attrs.sort) {
        this.attrs.sort();
      }
    }
  }

});

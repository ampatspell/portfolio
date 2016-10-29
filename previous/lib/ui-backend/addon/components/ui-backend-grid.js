import Ember from 'ember';
import layout from '../templates/components/ui-backend-grid';

export default Ember.Component.extend({
  classNameBindings: [ ':ui-backend-grid' ],
  layout,

  actions: {
    sort() {
      if(this.attrs.sort) {
        this.attrs.sort();
      }
    }
  }
});

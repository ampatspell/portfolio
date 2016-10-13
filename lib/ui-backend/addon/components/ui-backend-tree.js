import Ember from 'ember';
import layout from '../templates/components/ui-backend-tree';

export default Ember.Component.extend({
  classNameBindings: [ ':ui-backend-tree' ],
  layout,

  actions: {
    sort() {
      this.attrs.sort(this.get('array'));
    }
  }
});

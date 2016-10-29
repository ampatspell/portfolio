import Ember from 'ember';
import layout from '../templates/components/ui-backend-file';

export default Ember.Component.extend({
  classNameBindings: [ ':ui-backend-file' ],
  layout,

  actions: {
    action(files) {
      this.attrs.action(files);
    }
  }
});

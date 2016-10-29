import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: [ ':ui-backend-file' ],

  actions: {
    action(files) {
      this.attrs.action(files);
    }
  }

});

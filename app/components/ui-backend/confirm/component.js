import Ember from 'ember';

const {
  inject: { service }
} = Ember;

export default Ember.Component.extend({
  classNameBindings: [ ':ui-backend-confirm' ],

  confirm: service(),

  actions: {
    click(button) {
      button.action();
    }
  }

});

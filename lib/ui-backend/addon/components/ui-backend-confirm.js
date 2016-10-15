import Ember from 'ember';
import layout from '../templates/components/ui-backend-confirm';

const {
  inject: { service }
} = Ember;

export default Ember.Component.extend({
  classNameBindings: [ ':ui-backend-confirm' ],
  layout,

  confirm: service(),

  actions: {
    click(button) {
      button.action();
    }
  }

});

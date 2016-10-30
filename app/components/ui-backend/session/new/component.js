import Ember from 'ember';

const {
  computed: { readOnly }
} = Ember;

export default Ember.Component.extend({
  classNameBindings: [ ':ui-backend-session-new' ],

  session: readOnly('store.session'),

  actions: {
    save() {
      this.get('session').save().then(() => {
        this.transitionTo('backend');
      });
    }
  }

});

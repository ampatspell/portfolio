import Ember from 'ember';

const {
  inject: { service },
  computed: { oneWay }
} = Ember;

export default Ember.Component.extend({
  classNameBindings: [ ':ui-backend-screen' ],

  backend: service(),
  navigationItems: oneWay('backend.navigationItems'),

});

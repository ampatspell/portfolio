import Ember from 'ember';

const {
  inject: { service },
  computed: { oneWay }
} = Ember;

export default Ember.Component.extend({
  classNameBindings: [ ':screen-backend', ':portfolio-backend' ],

  backendNavigation: service(),
  navigationItems: oneWay('backendNavigation.items').readOnly()

});

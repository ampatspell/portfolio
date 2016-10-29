import Ember from 'ember';

const {
  inject: { service },
  computed: { oneWay }
} = Ember;

export default Ember.Component.extend({
  classNameBindings: [ ':screen-backend', ':portfolio-backend' ],

  backend: service(),
  navigationItems: oneWay('backend.navigationItems').readOnly()

});

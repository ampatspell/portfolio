import Ember from 'ember';

const {
  inject: { service }
} = Ember;

export default Ember.Component.extend({
  classNameBindings: [ ':ui-frontend-standalone', ':unavailable' ],

  backend: service()

});

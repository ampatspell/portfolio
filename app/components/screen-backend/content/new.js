import Ember from 'ember';

const {
  inject: { service }
} = Ember;

export default Ember.Component.extend({
  classNameBindings: [ ':screen-backend-content-new' ],

  backend: service()

});

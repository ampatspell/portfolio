import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: [ ':ui-backend-navigation-item', 'selected:selected' ]
});

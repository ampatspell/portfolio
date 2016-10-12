import Ember from 'ember';
import layout from '../templates/components/ui-backend-row-checkbox';

export default Ember.Component.extend({
  classNameBindings: [ ':ui-backend-row', ':checkbox' ],
  layout
});

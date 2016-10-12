import Ember from 'ember';
import layout from '../templates/components/ui-backend-row-value';

export default Ember.Component.extend({
  classNameBindings: [ ':ui-backend-row', ':value' ],
  layout
});

import Ember from 'ember';
import layout from '../templates/components/ui-backend-row-input';

export default Ember.Component.extend({
  classNameBindings: [ ':ui-backend-row', ':input' ],
  layout
});

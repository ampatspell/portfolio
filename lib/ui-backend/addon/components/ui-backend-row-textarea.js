import Ember from 'ember';
import layout from '../templates/components/ui-backend-row-textarea';

export default Ember.Component.extend({
  classNameBindings: [ ':ui-backend-row', ':textarea' ],
  layout
});

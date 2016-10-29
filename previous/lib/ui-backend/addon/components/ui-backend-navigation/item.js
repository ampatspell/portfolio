import Ember from 'ember';
import layout from '../../templates/components/ui-backend-navigation/item';

export default Ember.Component.extend({
  classNameBindings: [ ':ui-backend-navigation-item', 'selected:selected' ],
  layout,

  icon: null,
  selected: false

});

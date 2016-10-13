import Ember from 'ember';
import layout from '../templates/components/ui-backend-background-image';

const {
  computed,
  String: { htmlSafe }
} = Ember;

export default Ember.Component.extend({
  classNameBindings: [ ':ui-backend-background-image' ],
  attributeBindings: [ 'style' ],
  layout,

  url: null,

  style: computed('url', function() {
    let url = this.get('url');
    if(!url) {
      return;
    }
    return htmlSafe(`background-image: url('${url}')`);
  }).readOnly()

});

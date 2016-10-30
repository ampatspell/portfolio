import Ember from 'ember';

const {
  computed,
  String: { htmlSafe }
} = Ember;

export default Ember.Component.extend({
  classNameBindings: [ ':ui-background-image' ],
  attributeBindings: [ 'style' ],

  url: null,

  style: computed('url', function() {
    let url = this.get('url');
    if(!url) {
      return;
    }
    return htmlSafe(`background-image: url('${url}')`);
  }).readOnly()

});

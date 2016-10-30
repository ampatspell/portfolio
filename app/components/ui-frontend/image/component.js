import Ember from 'ember';
import Fixed from 'portfolio/mixins/fixed';

const {
  computed,
  String: { htmlSafe }
} = Ember;

export default Ember.Component.extend(Fixed, {
  attributeBindings: [ 'src', 'style' ],
  classNameBindings: [ ':ui-frontend-image' ],
  tagName: 'img',

  style: computed('size', function() {
    let { width, height } = this.get('size');
    return htmlSafe(`max-width: ${width}px; max-height: ${height}px`);
  }).readOnly(),

  click(e) {
    e.preventDefault();
    if(this.attrs.action) {
      this.attrs.action();
    }
  }

});

import Ember from 'ember';
import Fixed from './-fixed';

const {
  computed,
  String: { htmlSafe }
} = Ember;

export default Ember.Component.extend(Fixed, {
  attributeBindings: [ 'src', 'style' ],
  classNameBindings: [ ':frontend-image' ],
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

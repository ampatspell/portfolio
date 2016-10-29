import Ember from 'ember';
import layout from '../../../../templates/components/frontend-section/summary/gallery/image';

const {
  computed,
  String: { htmlSafe }
} = Ember;

export default Ember.Component.extend({
  classNameBindings: [ ':frontend-section-summary-gallery-image' ],
  attributeBindings: [ 'style' ],
  layout,

  style: computed('size', function() {
    let { w, h } = this.get('size');
    console.log(w, h);
    return htmlSafe(`width: ${w}px; height: ${h}px`);
  }).readOnly(),

});

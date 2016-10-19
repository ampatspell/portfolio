import Ember from 'ember';

const {
  computed,
  inject: { service },
  String: { htmlSafe },
  $
} = Ember;

const css = (e, name) => {
  let value = e.css(name);
  if(value.indexOf('px') !== -1) {
    return parseInt(value);
  }
  return 0;
};

export default Ember.Component.extend({
  attributeBindings: [ 'src', 'style' ],
  classNameBindings: [ ':frontend-image' ],
  tagName: 'img',

  window: service(),

  maxWidthSelector: null,
  maxWidth: computed('maxWidthSelector', function() {
    let selector = this.get('maxWidthSelector');
    if(!selector) {
      return;
    }
    let maxWidth = $(selector);
    if(!maxWidth) {
      return;
    }
    return css(maxWidth, 'max-width') - css(maxWidth, 'padding-left') - css(maxWidth, 'padding-right');
  }).readOnly(),

  style: computed('window.size', 'maxWidth', function() {
    let { width, height } = this.get('window.size');

    let padding = $('#content-padding');
    width -= css(padding, 'padding-left') + css(padding, 'padding-right');
    height -= css(padding, 'padding-top') + css(padding, 'padding-bottom');

    let maxWidth = this.get('maxWidth');

    if(maxWidth && width > maxWidth) {
      width = maxWidth;
    }

    return htmlSafe(`max-width: ${width}px; max-height: ${height}px`);
  }).readOnly()

});

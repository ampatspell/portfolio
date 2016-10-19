import Ember from 'ember';

const {
  computed,
  inject: { service },
  String: { htmlSafe },
  $
} = Ember;

const css = (e, name) => {
  return parseInt(e.css(name)) || 0;
};

export default Ember.Component.extend({
  attributeBindings: [ 'src', 'style' ],
  classNameBindings: [ ':frontend-image' ],
  tagName: 'img',

  window: service(),

  style: computed('window.size', function() {
    let { width, height } = this.get('window.size');
    let padding = $('#content-padding');
    width -= css(padding, 'padding-left') + css(padding, 'padding-right');
    height -= css(padding, 'padding-top') + css(padding, 'padding-bottom');
    return htmlSafe(`max-width: ${width}px; max-height: ${height}px`);
  }).readOnly()

});
